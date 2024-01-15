import Link from "next/link";

const MediaPage = "/catalog/media";

export default function CatalogPage() {
    return(
        <div>
            <p>go to media :</p>
            <Link 
                href={MediaPage}
                className="text-orange-400 hover:text-blue-800"
                >
                MEDIA
            </Link>
        </div>
    )
}