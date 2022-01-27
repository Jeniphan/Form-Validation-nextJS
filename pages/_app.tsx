import FormComponent from '@components/FormComp/FormComp'
import '@styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<FormComponent></FormComponent>
		</div>
	)
}

export default MyApp
