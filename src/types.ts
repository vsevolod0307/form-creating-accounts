export interface ListItem {
    title: string;
    value: "local" | "ldap";
}

export interface Validation {
    name: string;
    valid: boolean;
    value?: string | null;
}

export interface Data {
    id: number;
    mark: { text: string }[];
    type: string;
    login: string;
    password: string | null;
}

export interface State {
    data: Data[];
}