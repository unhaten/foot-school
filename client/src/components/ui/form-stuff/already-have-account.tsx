import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FC } from 'react'

interface AlreadyHaveAccountProps {
	askText: string
	text: string
	href: string
}

const AlreadyHaveAccount: FC<AlreadyHaveAccountProps> = ({
	askText,
	text,
	href
}) => {
	return (
		<div className='flex flex-col sm:flex-row items-center justify-center gap-2 mt-8'>
			<p className='text-sm'>{askText}</p>
			<Button variant='link' asChild className='text-indigo-500'>
				<Link href={`${href}`}>
					<span>{text}</span>
				</Link>
			</Button>
		</div>
	)
}

export default AlreadyHaveAccount
