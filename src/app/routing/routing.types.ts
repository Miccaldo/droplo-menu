type StaticRoute = () => string;
type DynamicRoute = (param: string) => string;

type Routes = {
    [key: string]: StaticRoute | DynamicRoute;
};