'use client'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form-stuff/form'
import { Input } from '@/components/ui/form-stuff/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import BottomGradient from '@/components/ui/bottom-gradient'

const MainLoginForm = ({ actionText = 'Войти' }) => {
	const formSchema = z.object({
		username: z.string().min(2).max(50),
		password: z.string()
	})

	// const formSchema = z.object({
	// 	username: z.string().min(2, {
	// 		message: 'Username must be at least 2 characters.'
	// 	})
	// })

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: ''
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
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input placeholder='••••••••' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* <Button
					type='submit'
					className='mx-auto block w-full sm:w-1/2 lg:w-1/3'
				>
					<span>{actionText}</span>
					<BottomGradient />
				</Button> */}

				<Button
					className='bg-gradient-to-br relative group/btn block w-full text-foreground rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'
					variant='outline'
				>
					<span>Войти &rarr;</span>
					<BottomGradient />
				</Button>
			</form>
		</Form>
	)
}

export default MainLoginForm
