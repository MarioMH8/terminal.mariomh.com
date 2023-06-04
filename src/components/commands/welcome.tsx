import styled from 'styled-components';

import pkg from '../../../package.json';

const HeroContainer = styled.div`
	display: flex;
	flex-wrap: wrap-reverse;

	@media (max-width: 932px) {
		margin-bottom: 1.5rem;
	}

	div {
		@media (min-width: 1024px) {
			flex-basis: 50%;
		}
	}
`;

const PreName = styled.pre`
	margin-top: 0.5rem;
	margin-bottom: 1.5rem;

	@media (max-width: 550px) {
		display: none;
	}
`;

const PreWrapper = styled.div`
	text-align: center;
`;

const PreNameMobile = styled.pre`
	margin-top: 0.5rem;
	margin-bottom: 1.5rem;

	@media (min-width: 550px) {
		display: none;
	}
`;

const PreImg = styled.pre`
	@media (max-width: 550px) {
		display: none;
	}
`;

const Seperator = styled.div`
	margin-top: 0.75rem;
	margin-bottom: 0.75rem;
`;

const Cmd = styled.span`
	color: ${({ theme }) => theme.colors.primary};
`;

const Link = styled.a`
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
					{`
___  ___           _      ___  ___ _   _ 
|  \\/  |          (_)     |  \\/  || | | |
| .  . | __ _ _ __ _  ___ | .  . || |_| |
| |\\/| |/ _\` | '__| |/ _ \\| |\\/| ||  _  |
| |  | | (_| | |  | | (_) | |  | || | | |
\\_|  |_/\\__,_|_|  |_|\\___/\\_|  |_/\\_| |_/`}
				</PreName>
				<PreWrapper>
					<PreNameMobile>
						{`

___  ___           _       
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
    \\_|  |_/\\_| |_/        
                           
`}
					</PreNameMobile>
				</PreWrapper>
				<div>Welcome to my terminal portfolio. (Version {pkg.version})</div>
				<Seperator>----</Seperator>
				<div>
					This project's source code can be found in this project's{' '}
					<Link target='_blank' href='https://github.com/MarioMH8/terminal.mariomh.com'>
						GitHub repo
					</Link>
					.
				</div>
				<Seperator>----</Seperator>
				<div>
					For a list of available commands, type `<Cmd>help</Cmd>`.
				</div>
			</div>
			<div className='illu-section'>
				<PreImg>
					{`
        :=+*#####*+=:                   
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
        :=+*#####*+=:                   
         `}
				</PreImg>
			</div>
		</HeroContainer>
	);
};

export default Welcome;
