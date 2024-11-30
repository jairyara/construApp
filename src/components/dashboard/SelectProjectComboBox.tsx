import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Check, ChevronsUpDown} from "lucide-react";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import projects from "@/app/data/projects.json";
import {cn} from "@/lib/utils";
import React, {useEffect} from "react";
import {useUserProjectStore, useUserRoleStore} from "@/store/globalStore";

interface Project {
    id: number;
    name: string;
    location: string;
    start_date: string;
    end_date: string;
    status: string;
}

const SelectProjectComboBox = () => {

    const {userProject, setUserProject} = useUserProjectStore();
    const  {role} = useUserRoleStore();

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [userProjects, setUserProjects] = React.useState<Project[]>([]);

    useEffect(() => {
        if (role === 'coordinator') {
            setUserProjects(projects);
        }
    }, [role]);

    useEffect(() => {
        setValue(userProject)
    }, [userProject]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        {value
                            ? userProjects.find((project: Project) => project.name === value)?.name
                            : "Seleccionar proyecto..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                    </Button>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Buscar proyecto..."/>
                    <CommandList>
                        <CommandEmpty>Proyecto no encontrado.</CommandEmpty>
                        <CommandGroup>
                            {projects && projects.map((project: Project) => (
                                <CommandItem
                                    key={project.name}
                                    value={project.name}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? userProject : currentValue)
                                        setUserProject(project.name)
                                        setOpen(false)
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === project.name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {project.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default SelectProjectComboBox;