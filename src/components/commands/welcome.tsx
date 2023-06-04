import styled from 'styled-components';

import pkg from '../../../package.json';

const HeroContainer = styled.div`
	display: flex;
	flex-wrap: wrap-reverse;

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
	@media (max-width: 550px) {
		display: none;
	}
	@media (max-width: 1024px) {
		margin: 0 auto;
	}
`;

const PreNameMobile = styled.pre`
	margin: 0 auto;
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

const Welcome: React.FC = () => {
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
				<div>Welcome to my terminal portfolio. (Version {pkg.version})</div>
				<div>----</div>
				<div>
					This project's source code can be found in this project's{' '}
					<Link target='_blank' href='https://github.com/MarioMH8/terminal.mariomh.com'>
						GitHub repo
					</Link>
					.
				</div>
				<div>----</div>
				<div>
					For a list of available commands, type `<Cmd>help</Cmd>`.
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
