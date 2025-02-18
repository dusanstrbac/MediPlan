'use client'
import Table  from '@/components/table'
import Komoda from "@/components/komoda";
import {useParams} from "next/navigation";

export default function UserPage() {

    const params = useParams();
    const email = params.user;

    return (
        <div>
            <Komoda />
            <Table />
        </div>
    )
}