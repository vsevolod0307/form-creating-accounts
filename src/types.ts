export interface ListItem {
    title: string;
    value: "local" | "ldap";
}

export interface Validation {
    name: string;
    valid: boolean;
}