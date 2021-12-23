import React from 'react'

import {GridItemWrapper} from './GridItemStyles'

import dots from '../../images/icon-ellipsis.svg'
const GridItem = ({activity, selectedTime}) => {

    const {title} = activity
    return (
        <>
            <GridItemWrapper>

                <div className = 'gridItemInnerContent'>               
                    <div className = 'topRow'>
                        <h2>{title}</h2>
                        <img src = {dots} alt = 'dots'/>
                    </div>
                    
                    <div className = 'bottomRow'>
                        <p className = 'currentTime'>
                            {activity.timeframes[selectedTime].current}hrs
                        </p>

                        <p className = 'previousTime'>
                            {
                             selectedTime === 'daily'  && 'Yesterday -'
                            }
                            {
                             selectedTime === 'weekly' && 'Last Week -'

                            }
                            {
                             selectedTime === 'monthly' && 'Last Month - '

                            }
                            {activity.timeframes[selectedTime].previous}hrs
                        </p>
                        
                    </div>
                </div>
                

            </GridItemWrapper>
        
            
        
        
        </>
    )
}

export default GridItem
