<article class="col-xs-12 smlt-choose">
    <div class=row>    
        <div class="col-xs-12">
            <h2>Titre 2</h2>
        </div>

        <div class="col-xs-12 col-md-4">
            <h3>Title</h3>

            <div class="your-monster">
                <input type='text' class='name-monster search-monster' placeholder='name'>
                <div class='monsters'>

                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-4">                            
            <h3>Title</h3>
            
            <div class="other-monster">
                <input type='text' class='name-monster search-monster' placeholder='name'>
                <div class='monsters'>
                </div>
            </div>
        </div>
        <div class="col-xs-12 col-md-4">                                                         
            <h3>Configure</h3>      

            <div class="configure">
                <table>
                    <tr>
                        <th>Leader</th>
                        <td>
                            <select>
                                <option value=''></option>
                                <option value='HP%'>HP</option>
                                <option value='DEF%'>DEF</option>
                                <option value='ATK%'>ATK</option>
                                <option value='SPD'>SPD</option>
                                <option value='CRATE'>CRATE</option>
                                <option value='CDMG'>CDMG</option>
                                <option value='RES'>RES</option>
                                <option value='ACC'>ACC</option>
                            </select>
                        </td>
                        <td><span class='value-leader-ctn'><input type='number' placeholder='Ex: 33' class='value-leader'></span></td>
                    </tr>
                    <tr>
                        <th>Boss focus</th>
                        <td colspan='2'><input type='checkbox'></td>
                    </tr>
                    <tr>
                        <th>Fighting number</th>
                        <td colspan='2'><input class='nb-fight' type='number' placeholder='Ex: 1000' value='1000'></td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="col-xs-12 b-team">                                                        
            <h3>Title</h3>
        
            <div class='team t-configure'>
                
            </div>
        </div>
            
        <div class="col-xs-12">
            <a href='' class='btn btn-simulate desactivate'>Simulate</a>
        </div>
    </div>
</article>

<article class="col-xs-12 smlt-loading">
    <div class=b-circle>
        <div
            class="ldBar label-center"
            style="width:50%; height:50%; margin:auto"
            data-value="0"
            data-preset="circle"
            data-stroke="#C82323"
            data-stroke-width="5"
        ></div>
    </div>
</article>

<article class="col-xs-12 smlt-result">
    <div class=row>     
        <div class="col-xs-12">                                                
            <h2>Title</h2>
        </div>

        <div class="col-xs-12 b-team">                                                        
            <h3>Title</h3>
        
            <div class='team t-result'>
                
            </div>
        </div>
                 
        <div class="col-xs-12 b-results-infos">   
            <div class="b-result">                                                       
                <h3>Title</h3>
            
                <div class='results'>                
                    <table>
                        <tr>
                            <th>Win rate</th>
                            <td class='winRate'>89%</td>
                        </tr>
                        <tr>
                            <th>Average time</th>
                            <td>00:50 min</td>
                        </tr>
                        <tr>
                            <th>Fighting number</th>
                            <td>10 000</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div class="">
                <a href='' class='btn new-simulation'>New</a>
            </div>
        </div>
    </div>
</article>