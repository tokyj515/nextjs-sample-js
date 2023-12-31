// 데이터를 보여주는 컴포넌트 -> 서버 컴포넌트
// 데이터를 불러올 땐 함수를 async로 만듦

export default async function Read(props){
	const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`topics/${props.params.id}`, {cache:'no-store'});
	const topic = await resp.json();
	return(
		<>
			<h2>{topic.title}</h2>
			{topic.body} <br/>
			parameter: {props.params.id}
		</>
	)
}