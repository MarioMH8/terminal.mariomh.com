import './about.css';

import { useStore } from '@nanostores/react';
import type { FC } from 'react';

import { i18n } from '../../state';

const messages = i18n('about', {
	hi: 'Hola, me llamo',
	im: `Soy`,
	developer: `un desarrollador javascript`,
	based: `trabajando desde Madrid, Spain.`,
	description: `Apasionado de la programación. Me encanta desarrollar aplicaciones que resuelvan problemas del día a día.`,
});

const about: FC = () => {
	const t = useStore(messages);

	return (
		<div className='terminal-line-history'>
			<p>
				{t.hi} <span className='highlight'>Mario Men&eacute;ndez</span>!
			</p>
			<p>
				{t.im} <span className='alt'>{t.developer}</span> {t.based}
			</p>
			<p>{t.description}</p>
		</div>
	);
};

export default about;
