import { useState } from 'react'
import Button from '../Button/Button'
import Form from '../Form/Form'

export default function Main() {
	const [formIsActive, setFormActive] = useState(false)
	return (<>
	<Button label='Связаться со мной' onClick={() => setFormActive(active => !active)}/>
		<>{formIsActive && <Form />}</>
	</>)
}
