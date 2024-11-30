import { create } from 'zustand';

interface UserRoleState {
    role: 'coordinator' | 'resident' | null | undefined;
    setRole: (role: 'coordinator' | 'resident') => void;
}

interface UserProjectState {
    userProject: string,
    setUserProject: (userProject: string) => void;
}

export interface Activity {
    id: number;
    project_id: number;
    activity: string;
    responsible: string;
    start_date: string;
    end_date: string;
    progress: number;
    overall_status: string;
    materials_used: {
        material: string;
        quantity: string;
    }[];
    issues: {
        description: string;
        date_reported: string;
        resolved: boolean;
    }[];
    evidences: {
        description: string;
        url: string;
    }[];
}

export interface ActivityProgress {
    task_id: number;
    task_name: string;
    start_date: string;
    end_date: string;
    duration: number;
    actual_duration: number | null;
    status: string;
    dependencies: number[];
}

interface ProgramState {
    activities: ActivityProgress[];
    setActivities: (activities: ActivityProgress[]) => void;
}

export interface Budget {
    id: number;
    category: string;
    planned_cost: number;
    actual_cost: number;
    deviation: number;
    status: string;
}

interface BudgetState {
    budgets: Budget[];
    setBudgets: (budgets: Budget[]) => void;
}

export interface QualityReport {
    report_id: number;
    date: string;
    inspection_type: string;
    description: string;
    non_conformities: {
        issue: string;
        corrective_action: string;
        status: string;
    }[];
    photos: string[];
}

interface QualityReportState {
    reports: QualityReport[];
    setReports: (reports: QualityReport[]) => void;
}

interface ControlWorkState {
    activities: Activity[];
    setActivities: (activities: Activity[]) => void;
}

const useUserRoleStore = create<UserRoleState>((set) => ({
    role: null,
    setRole: (role) => set({ role }),
}));

const useUserProjectStore = create<UserProjectState>((set) => ({
    userProject: '',
    setUserProject: (userProject) => set({ userProject }),
}));

const useControlWorkStore = create<ControlWorkState>((set) => ({
    activities: [],
    setActivities: (activities: Activity[]) => set({ activities }),
}));

const useBudgetStore = create<BudgetState>((set) => ({
    budgets: [],
    setBudgets: (budgets: Budget[]) => set({ budgets }),
}));

const useProgramStore = create<ProgramState>((set) => ({
    activities: [],
    setActivities: (activities: ActivityProgress[]) => set({ activities }),
}));

const useQualityReportStore = create<QualityReportState>((set) => ({
    reports: [],
    setReports: (reports: QualityReport[]) => set({ reports }),
}));

export { useUserRoleStore, useUserProjectStore, useControlWorkStore, useBudgetStore, useProgramStore, useQualityReportStore };