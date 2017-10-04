export class Link {
    label: string;
    icon: string;
    url: string;
    children: Link[];
    tooltip: string;
    show = false;
    protected: boolean;
    roles: string[];
}
