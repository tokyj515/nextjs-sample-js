"use client"

import Link from "next/link";
import {useParams, useRouter} from "next/navigation";


export function Control(){ //해당 부분만 client 컴포넌트화
	const router = useRouter();
	const params = useParams();
	const id = params.id;

	return (
		<ul>
			<li><Link href="/create">Create</Link></li>
			{id ? <>
				<li><Link href={"/update/"+id}>Update</Link></li>
				<li><input type="button" value="delete" onClick={()=>{
					const options = {method: 'DELETE'}
					fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id, options)
						.then(resp => resp.json())
						.then(result =>{
							console.log(result)
							router.push('/');
							router.refresh();
						})
				}}/></li>
			</> : null}
		</ul>
	)
}