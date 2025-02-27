import '@commands/welcome.css';

import type { ComponentCommand } from '@commands';
import { i18n } from '@locale';
import { params } from '@nanostores/i18n';
import { useStore } from '@nanostores/preact';
import package_ from '@package';
import type { FunctionalComponent } from 'preact';

const messages = i18n('welcome', {
	available_commands: 'Para ver una lista de los comandos disponibles, escribe ',
	project_source: 'Puedes ver el código fuente del proyecto en el siguiente ',
	repo: 'repositorio de GitHub',
	title: params<{ version: string }>('Bienvenido a mi portfolio en linea de comandos. (Versión {version})'),
});

const Welcome: FunctionalComponent = () => {
	const t = useStore(messages);

	return (
		<div
			className='hero'
			data-testid='welcome'>
			<div className='info-section'>
				<pre className='name'>
					{`___  ___           _      ___  ___ _   _ 
|  \\/  |          (_)     |  \\/  || | | |
| .  . | __ _ _ __ _  ___ | .  . || |_| |
| |\\/| |/ _\` | '__| |/ _ \\| |\\/| ||  _  |
| |  | | (_| | |  | | (_) | |  | || | | |
\\_|  |_/\\__,_|_|  |_|\\___/\\_|  |_/\\_| |_/`}
				</pre>
				<pre className='name-mobile'>
					{`___  ___           _       
|  \\/  |          (_)      
| .  . | __ _ _ __ _  ___  
| |\\/| |/ _\` | '__| |/ _ \\ 
| |  | | (_| | |  | | (_) |
\\_|  |_/\\__,_|_|  |_|\\___/ 
                           
                           
    ___  ___ _   _         
    |  \\/  || | | |        
    | .  . || |_| |        
    | |\\/| ||  _  |        
    | |  | || | | |        
    \\_|  |_/\\_| |_/`}
				</pre>
				<p>{t.title({ version: package_.version })}</p>
				<span>----</span>
				<p>
					{t.project_source}
					<a
						className='link'
						href='https://github.com/MarioMH8/terminal.mariomh.com'
						target='_blank'>
						{t.repo}
					</a>
					.
				</p>
				<span>----</span>
				<p>
					{t.available_commands}`<span className='command'>help</span>`.
				</p>
			</div>
			<div className='illu-section'>
				<pre className='img'>
					{`          ::::::        ::::::           
         ::::::::      ::::::::         
         ::::::::      ::::::::         
         ::::::::      ::::::::         
   .::::::      ::::::::      ::::::.   
   :::::::      ::::::::      :::::::   
   :::::::      ::::::::      :::::::   
    .....        ......        .....    
                                        
                                        
    .....        ......        .....    
   :::::::      ::::::::      :::::::   
   :::::::      ::::::::      :::::::   
   :::::::      ::::::::      :::::::   
         ::::::::      ::::::::         
         ::::::::      ::::::::         
         ::::::::      ::::::::         
          ::::::        ::::::`}
				</pre>
			</div>
		</div>
	);
};

const WelcomeCommand: ComponentCommand = {
	command: 'welcome',
	component: Welcome,
};

export default WelcomeCommand;
