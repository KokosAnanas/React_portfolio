
export default function Button() {
 
  return (
	<>
    <button onClick={() => console.log('I am')}>Связаться со мной</button>
	<form action="">
		<label htmlFor="name">Ваше имя:</label>
		<input id='name' />
		<input type="checkbox" checked={false} />
	</form>
	</>
  )
}

