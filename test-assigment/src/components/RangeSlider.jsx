import React from 'react';
import 'jquery/dist/jquery.js';
import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';

class RangeSlider extends React.Component
{
  
  componentDidMount(){
    $(".js-range-slider").ionRangeSlider({   
    grid: true,
    skin: "big"});
  }
  render()
  {
    return (
      <div>
        <input type="text" class="js-range-slider" name="my_range" value="" />
      </div>  
) } }
 export default RangeSlider;
