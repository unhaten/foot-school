'use client'

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const MainForm = ({ actionText = 'Войти' }) => {
	const formSchema = z.object({
		username: z.string().min(2).max(50)
	})

	// const formSchema = z.object({
	// 	username: z.string().min(2, {
	// 		message: 'Username must be at least 2 characters.'
	// 	})
	// })

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: ''
		}
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Имя пользователя</FormLabel>
							<FormControl>
								<Input placeholder='user' {...field} />
							</FormControl>
							{/* <FormDescription>
								Введите ваше имя аккаунта
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type='submit'
					className='mx-auto block w-full sm:w-1/2 lg:w-1/3'
				>
					{actionText}
				</Button>
			</form>
		</Form>
	)
}

export default MainForm
