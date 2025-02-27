import '@commands/about.css';

import type { ComponentCommand } from '@commands';
import { i18n } from '@locale';
import { useStore } from '@nanostores/preact';
import type { FunctionalComponent } from 'preact';

const messages = i18n('about', {
	based: `que trabaja desde Madrid, España.`,
	description: `+10 años de experiencia como Desarrollador Web. He trabajado acelerando el desarrollo de start-ups y liderando equipos de empresas multinacionales.`,
	developer: `Arquitecto de Soluciones`,
	hi: 'Hola, me llamo',
	im: `Soy un`,
});

const About: FunctionalComponent = () => {
	const t = useStore(messages);

	return (
		<div className='terminal-line-history'>
			<p>
				{t.hi} <span className='highlight'>Mario Men&eacute;ndez Hidalgo</span>!
			</p>
			<p>
				{t.im} <span className='highlight'>{t.developer}</span> {t.based}
			</p>
			<p>{t.description}</p>
		</div>
	);
};

const AboutCommand: ComponentCommand = {
	command: 'about',
	component: About,
};

export default AboutCommand;
