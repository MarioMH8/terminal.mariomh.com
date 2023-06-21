import './about.css';

import { useStore } from '@nanostores/preact';
import type { FunctionalComponent } from 'preact';

import type { ComponentCommand } from '../state/commands';
import { i18n } from '../state/locale';

const messages = i18n('about', {
	hi: 'Hola, me llamo',
	im: `Soy`,
	developer: `un desarrollador javascript`,
	based: `trabajando desde Madrid, Spain.`,
	description: `Apasionado de la programación. Me encanta desarrollar aplicaciones que resuelvan problemas del día a día.`,
});

const About: FunctionalComponent = () => {
	const t = useStore(messages);

	return (
		<div className='terminal-line-history'>
			<p>
				{t.hi} <span className='highlight'>Mario Men&eacute;ndez</span>!
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
