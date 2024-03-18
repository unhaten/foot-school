import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC } from 'react'

interface AlreadyHaveAccountProps {
	text: string
	href: string
}

const AlreadyHaveAccount: FC<AlreadyHaveAccountProps> = ({ text, href }) => {
	return (
		<div className='flex items-center justify-center gap-2 mt-8'>
			<p className='text-sm'>Уже есть аккаунт?</p>
			<Button variant='link' asChild className='text-indigo-500'>
				<Link href={`${href}`}>
					<span>{text}</span>
				</Link>
			</Button>
		</div>
	)
}

export default AlreadyHaveAccount
