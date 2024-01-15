import { ReactNode } from "react";

export default function CatalogLayout(
    {children} : {children: ReactNode}){
        return (
            <div>
                <h1>Catalog</h1>

                {children}
            </div>
        )
}