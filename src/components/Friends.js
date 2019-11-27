import React from 'react';
import DanShot from '../img/dan_shot.jpg';
import BobShot from '../img/bob_shot.jpg';
import KarenShot from '../img/karen_shot.jpg';
import GeorgeShot from '../img/george_shot.jpg';
import DaveShot from '../img/dave_shot.jpg';
import OldGuyShot from '../img/oldguy_shot.jpg';

const Friends = () => (
	<div className="friends">
    	<div className="friends__wrapper">
        	<div class="friends__section">
            	<div class="friends__section-col">
              		<img src={GeorgeShot}></img>
              		<div class="friends__section-col-text">
						<h2>George</h2>
						<p>‘I enjoy the support we give the homeless, it is such a good feeling when I pass a homeless person and they
							say “I know you” and it’s because I have helped them at street kitchens with Coffee4Craig.’</p>
            		</div>           
			 	</div>
            	<div class="friends__section-col">
              		<img src={DanShot}></img>
              		<div class="friends__section-col-text">
            		<h2>Dan</h2>
            		<p>‘I enjoy the support we give the homeless, it is such a good feeling when I pass a homeless person and they
                 		say “I know you” and it’s because I have helped them at street kitchens with Coffee4Craig.’</p>
           			</div>         
			    </div>
        	</div>
        	<div class="friends__section extra-margin">
            	<div class="friends__section-col">
            		<img src={KarenShot}></img>
            		<div class="friends__section-col-text">
            			<h2>Keren</h2>
            			<p>‘I enjoy the support we give the homeless, it is such a good feeling when I pass a homeless person and they
                			say “I know you” and it’s because I have helped them at street kitchens with Coffee4Craig.’</p>
            		</div>
           		</div>
            	<div class="friends__section-col">
            		<img src={BobShot}></img>
            		<div class="friends__section-col-text">
						<h2>Bob</h2>
						<p>‘I enjoy the support we give the homeless, it is such a good feeling when I pass a homeless person and they
							say “I know you” and it’s because I have helped them at street kitchens with Coffee4Craig.’</p>
            		</div>
            	</div>
        	</div>
        	<div class="friends__section">
            	<div class="friends__section-col">
            		<img src={OldGuyShot}></img>
            		<div class="friends__section-col-text">
						<h2>Nick</h2>
						<p>‘I enjoy the support we give the homeless, it is such a good feeling when I pass a homeless person and they
							say “I know you” and it’s because I have helped them at street kitchens with Coffee4Craig.’</p>
            		</div>           
				</div>
            	<div class="friends__section-col">
					<img src={DaveShot}></img>
					<div class="friends__section-col-text">
						<h2>Dave</h2>
						<p>‘I enjoy the support we give the homeless, it is such a good feeling when I pass a homeless person and they
							say “I know you” and it’s because I have helped them at street kitchens with Coffee4Craig.’</p>
					</div>          
				</div>
        	</div>
    	</div>
  </div>
  );

export default Friends;