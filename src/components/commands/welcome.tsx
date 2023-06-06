import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import pkg from '../../../package.json';

const HeroContainer = styled.div`
	display: flex;
	flex-wrap: wrap-reverse;
	align-items: center;

	> div {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		width: 100%;

		@media (min-width: 1024px) {
			flex-basis: 50%;
		}
	}

	> div:last-child pre:first-child {
		margin: 0 auto;
	}

	> div:last-child {
		@media (max-width: 1024px) {
			margin: 0 auto;
		}
	}
`;

const PreName = styled.pre`
	margin-bottom: 1rem;
	@media (max-width: 550px) {
		display: none;
	}
	@media (max-width: 1024px) {
		margin: 1rem auto;
	}
`;

const PreNameMobile = styled.pre`
	margin: 0 auto 1rem;
	@media (min-width: 550px) {
		display: none;
	}
`;

const PreImg = styled.pre`
	@media (max-width: 550px) {
		display: none;
	}
`;

const Cmd = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

const Link = styled.a`
	display: inline-block;
	color: ${({ theme }) => theme.colors.secondary};
	text-decoration: none;
	line-height: 1.5rem;
	white-space: nowrap;
	border-bottom: 2px dashed ${({ theme }) => theme.colors.secondary};

	&:hover {
		border-bottom-style: solid;
	}
`;

const Welcome: FC = () => {
	const { t } = useTranslation();

	return (
		<HeroContainer data-testid='welcome'>
			<div className='info-section'>
				<PreName>
					{`___  ___           _      ___  ___ _   _ 
|  \\/  |          (_)     |  \\/  || | | |
| .  . | __ _ _ __ _  ___ | .  . || |_| |
| |\\/| |/ _\` | '__| |/ _ \\| |\\/| ||  _  |
| |  | | (_| | |  | | (_) | |  | || | | |
\\_|  |_/\\__,_|_|  |_|\\___/\\_|  |_/\\_| |_/`}
				</PreName>
				<PreNameMobile>
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
				</PreNameMobile>
				<div>{t('welcome.title', { version: pkg.version })}</div>
				<div>----</div>
				<div>
					{t('welcome.project_source')}
					<Link target='_blank' href='https://github.com/MarioMH8/terminal.mariomh.com'>
						{t('welcome.repo')}
					</Link>
					.
				</div>
				<div>----</div>
				<div>
					{t('welcome.available_commands')}`<Cmd>help</Cmd>`.
				</div>
			</div>
			<div className='illu-section'>
				<PreImg>
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
				</PreImg>
			</div>
		</HeroContainer>
	);
};

export default Welcome;
