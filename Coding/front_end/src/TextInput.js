import React, { useState } from 'react'
import axios from 'axios'
import { Form, FloatingLabel, Button } from 'react-bootstrap'

const TextInput = () => {
	const [input, setInput] = useState('')
	const [output, setOutput] = useState('')
	const onSubmit = async (e) => {
		e.preventDefault()
		try {
			console.log(input)
			var bodyFormData = new FormData()
			bodyFormData.append('text', input)
			const { data } = await axios({
				method: 'post',
				url: 'http://cd5d-34-75-177-55.ngrok.io',
				data: bodyFormData,
				headers: {
					'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
				},
			})
			console.log(data)
			setOutput(data.topic)
			console.log(output)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div>
			<Form>
				<FloatingLabel className='mb-3'>
					<Form.Control
						as='textarea'
						placeholder='Please enter the Abstract'
						style={{ height: '200px', width: '500px' }}
						value={input}
						onChange={(e) => {
							setInput(e.target.value)
						}}
					/>
				</FloatingLabel>
				<div className='btn-block'>
					<Button
						type='submit'
						variant='outline-info'
						onClick={onSubmit}>
						Submit
					</Button>
				</div>
			</Form>
			<h2 className='my-5'>Topic : {output}</h2>
		</div>
	)
}

export default TextInput
