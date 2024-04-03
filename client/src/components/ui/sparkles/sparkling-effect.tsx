'use client'
import React from 'react'
import { SparklesCore } from './sparkles'

export function SparklingEffect() {
	return (
		<>
			<SparklesCore
				id='tsparticlesfullpage'
				background='transparent'
				minSize={0.6}
				maxSize={2.0}
				particleDensity={100}
				className='w-full h-20 absolute'
				particleColor='#000'
			/>
		</>
	)
}
