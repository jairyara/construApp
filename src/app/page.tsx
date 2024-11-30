'use client';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useUserRoleStore} from "@/store/globalStore";
import {useRouter} from "next/navigation";

export default function Home() {

    const router = useRouter();
    const {setRole} = useUserRoleStore();

    const handleButtonClick = (role: 'coordinator' | 'resident') => {
        setRole(role);
        router.push('/dashboard/inicio');
    }

    return (
        <main className='w-full h-screen grid grid-cols-1'>
            <Image
                src='/obra.webp'
                alt='Fondo de pantalla'
                width={200}
                height={200}
                className='w-full h-screen aspect-video object-cover col-start-1 row-start-1'
            />
            <section className='col-start-1 row-start-1 bg-custom-black/50 flex justify-center items-center'>
                <div>
                    <h1 className='text-4xl font-bold text-center text-white mb-2'>SandBox</h1>
                    <div className='flex gap-4'>
                        <Button onClick={()=>handleButtonClick('coordinator')} className='bg-custom-yellowDark text-black hover:bg-custom-yellowDark/90'>
                            Coordinador de proyectos
                        </Button>
                        <Button onClick={()=>handleButtonClick('resident')} className='text-custom-yellowDark'>
                            Residente de obra
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
