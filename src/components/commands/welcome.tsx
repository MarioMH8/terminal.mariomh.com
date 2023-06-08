import './welcome.css';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import pkg from '../../../package.json';

const Welcome: FC = () => {
	const { t } = useTranslation();

	return (
		<div className='hero' data-testid='welcome'>
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
				<div>{t('welcome.title', { version: pkg.version })}</div>
				<div>----</div>
				<div>
					{t('welcome.project_source')}
					<a
						className='link'
						target='_blank'
						href='https://github.com/MarioMH8/terminal.mariomh.com'>
						{t('welcome.repo')}
					</a>
					.
				</div>
				<div>----</div>
				<div>
					{t('welcome.available_commands')}`<span className='command'>help</span>`.
				</div>
			</div>
			<div className='illu-section'>
				<pre className='img'>
					{`        :=+*#####*+=:                   
     :*%%%%%%%%%%%%%%%*=+*###**=-.      
   :#%%%%%%%%%%%%%%%%%%%#..+%%%%%%:     
  +#.  .+%%%%%#:  .*%%%%+  :%%%%%%   :  
 +%=     #%%%%.    .%%%%+  :%%%%%%   #+ 
:%%.     :%%%+      #%%%+            #%-
+%*   =   *%#   =   =%%%+  .++++++   #%*
+%-   #=   %-  :%.   %%%+  -%%%%%%   #%*
:%   :%%   :   *%=   *%%+  -%%%%%%   #%-
 -   =%%*     -%%*   -%%%**%%%%%%%#*#%+ 
     *%%%:    %%%%   .%%%%%%%%%%%%%%%=  
    -%%%%#-.:*%%%%+::=%%%%%%%%%%%%#=    
     :*%%%%%%%%%%%%%%%*=+*###**+-.      
        :=+*#####*+=:`}
				</pre>
			</div>
		</div>
	);
};

export default Welcome;
