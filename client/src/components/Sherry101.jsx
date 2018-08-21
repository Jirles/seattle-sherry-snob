import React from 'react';

export const Sherry101 = () => {
    return(
        <div className='flex flex-wrap p1' >
            <div className='h1 bold col-12' >Sherry 101</div>
            <blockquote className='h3 col-12 italic'>If God had not made Sherry, how imperfect his work would have been. <span className='h4 italic'> - Benito Perez Galdos</span></blockquote>
            <figure className='m-auto'>
                    <img alt='Different styles of sherry' className='shadow' src='http://localhost:3001/api/sherry-types-image' width='80%'/>
                    <figcaption className='content-right' >Sherries range from dry, bright Fino to decedently sweet, viscous Pedro Ximénez. Credit: <a href='https://catavino.net/top-five-mistakes-in-serving-sherry/' target='_blank' rel="noopener noreferrer" >CataVino</a></figcaption>
            </figure>

            <p>
                Sherry is a fortified wine, crafted in the area around Jerez de la Frontera -- often seen shortened to Jerez -- in the southern autonomous region of Spain known as Andalusia. Contrary to popular belief, sherry is more than a sweet desert wine meant for post-dinner consumption. Much like its country of origin, sherry is multi-faceted.
            </p>
            <h3>Creating a bottle of sherry</h3>
            <p>
                So how does one go about making a bottle of sherry? Sherry wine is reputed to be over 3,000 years old. Indeed, the first mention of sherry wine is made by a Greek geographer Strabo in the 1st century B.C. From the region of Jerez, as it is known today, traders shipped sherry throughout the Mediterranean basin, particularly Rome.

                For over 3,000 years different historical circumstances have moulded the identity of these wines. But what are the characteristics of sherry wines as we know them today? 
            </p>
            <p>
                <span className='bold block'>Fortification</span>
                Shipping wine overseas in wine casks was problematic in the time before refrigeration. Casks were not air-tight which lead the wine to oxidize resulting in vinegar. To counter the effects of oxidation, winemakers soon learned to add spirits to their wine to reduce spoilage on long shipments. 
                
                By adding the spirits in a different times in the fermentation process, winemakers could control the sugar content in their products. Adding the spirits pre-fermentation, as in Pedro Ximenez sherry for example, would result in a sweeter wine as the sugar in the spirit would be converted during the fermentation process. For the majority of sherry, un-aged brandy is added post-fermentation, resulting in a dryer vintage.
            </p>
            <div className='col-12 flex'>
                <div className='col-4 inline'>
                    <span className='bold'>The Grapes: Palomino, Pedro Ximénez, and Moscatel de Alejandria </span>
                    <p>
                        Sherry is made from the Palomino, Pedro Ximénez, and Moscatel de Alejandria (Muscat of Alexandria) grape varieties. Most commonly, the Palomino grape is used, but Pedro Ximénez and Moscatel grapes are used in the creation of their respective sweet, eponymous sherry varieties.
                    </p>
                    <p>
                        Sherry  is primarily made from the Palomino grape, account for 95% of all sherry production. These relatively unknown grapes thrive in the humid climate and unique white, chalky soils of the region known as <em>albariza</em>. While they are not necessarily well-suited to making traditional wine, the Palomino is perfect for sherry which is fortified with spirits post-fermentation.
                    </p>
                </div>
                <figure className='col-6 inline-block'>
                    <img alt='Palomino grapes on the vine' className='shadow' src='http://localhost:3001/api/palomino-grapes-image' width='75%'/>
                    <figcaption>Palomino Grapes, Credit: <a href='https://www.flickr.com/photos/jypsygen/' target='_blank' rel="noopener noreferrer" >jypsygen</a></figcaption>
                </figure>
            </div>
            <p>
                On the other hand, Pedro Ximénez and Moscatel de Alejandria (Muscat of Alexandria) grapes only produce a small portion of overall sherry production, and undergo a special process called <em>pasificación</em> before fermentation. In this process, after the grapes are harvested they are laid out on grass matts to dry in the sun, effectively turning the grapes into raisins. Additionally, unlike its dryer, Palomino-derived cousins, brandy is added to Pedro Ximenez and Moscatel de Alejandria sherry varieties during fermentation in order to produce a sweeter sherry.
            </p>
            <section>
                <p>
                    <span className='bold block'>Aging Process</span>
                    In general, sherry is aged a minimum of two years in wooden barrels arranged in a solera system. The youngest barrels are placed at the top of the solera with the oldest barrels at the bottom. When it comes time for bottling, sherry is taken from the bottom-most barrels, but they are never fully emptied. The casks are then filled in a cascading style so that middle casks are filled by the topmost casks and the topmost casts are filled with the most recent harvest. 
                    
                    The solera system ensures the bottom barrel will contain the oldest and most complex wine. Soleras vary in how many rows they contain as well as how old the oldest wine is, and typically the older the solera, or the more barrel rows they contain, the more complex the final wine.

                    Additionally, there are two main styles for aging sherry: 
                </p>
                <div className='col-12 flex'>
                    <figure className='col-6 inline'>
                            <img alt='Sherry with a thin layer of flor' className='shadow' src='http://localhost:3001/api/flor-image' width='90%' />
                            <figcaption className='col-8' >Flor is an ivory colored, wrinkled, waxy foam that can be up to two centimeters thick. Credit: <a href='https://www.sherry.wine/sherry-wine/production/vinification' target='_blank' rel="noopener noreferrer" >Sherry.org</a></figcaption>
                        </figure>
                    <ol className='col-4 inline-block'>
                        <li className='my4'>
                            <span className='italic'>Flor Aging: </span> Flor is the thin layer of indigenous yeast cells that forms on top of sherry wine as it starts to age. Flor protects the wine from air contact and can only grow naturally in the climate of southern Spain. This style of aging produces the “Fino” and “Manzanilla” styles of sherry.
                        </li>
                        <li>
                            <span className='italic'>Non-Flor Aging: </span> Allowing sherry to age sans flor allows the wine to oxidize, taking on a nuttier and richer character. The wines produced without flor are typically fortified from 15% to around 17-20% alcohol. This style of aging is used in the “Amontillado” and “Oloroso” styles of sherry.
                        </li>
                    </ol>
                </div>
            </section>
            <section>
                <div className='h4 bold'>Types of Sherry</div>

                <table className='col-12 m2 p2'>
                    <thead>
                        <tr>
                            <th className='underline'>
                                Name
                            </th>
                            <th className='underline'>
                                Description
                            </th>
                            <th className='underline'>
                                Sugar Content
                            </th>
                            <th className='underline'>
                                Ideal Serving Temperature
                            </th>
                            <th className='underline'>
                                Pairings
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Fino
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                Driest, most saline-style of sherry, made from Palomino grapes and aged through the flor process
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Very Dry
                            </td>
                            <td className='border-bottom mx-auto col-2 center' >
                                7-9 °C / 44-48 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Salty snacks like peanuts, potato chips, cured olives and fried seafood
                            </td>
                        </tr>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Manzanilla
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                In essence, fino made in the coastal town of Sanlúcar de Barrameda. Manzanilla is the lighest of the sherry varieties
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Dry
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                7-9 °C / 44-48 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Raw seafood
                            </td>
                        </tr>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Amontillado
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                The result when a flor blanket fails, Amontillado is a brown sherry whose nutty taste brings to mind sautéed mushrooms and a richness best described as umami.
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Dry
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                13 °C / 55 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Medium-bodied soups or flavorfully sauced pork, pheasant or rabbit.
                            </td>
                        </tr>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Oloroso
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                Unlike Amontillado, oloroso sees the cellar master intentionally destroy the flor to promote oxidation. Olorosos can be sweet or dry in style, depending on whether the wine includes Moscatel (sweet), or is made strictly from Palomino grapes (dry).
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Sweet/Dry
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                13 °C / 55 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Best reserved for the conclusion of a meal, paired with aged, hard cheese
                            </td>
                        </tr>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Palo Cortado
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                The wildcard of Sherry, palo cortado begins its existence under flor, and then loses that cover while tracking toward amontillado. Along the way, however, something mysterious happens, and the wine grows richer and more regal, like oloroso. The name, palo cortado, is derived from a cross traditionally drawn in white chalk on the barrel’s exterior to note that it’s doing its own thing and isn’t amontillado or oloroso. 
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Dry
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                13 °C / 55 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Traditional pairings are charcuterie, especially Iberico ham.
                            </td>
                        </tr>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Cream Sherry
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                Typically begins as a dry oloroso sherry base where sweet grape juice is added to make a lighter dessert style, sweet daily sipper, or after-dinner drink with coffee. 
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Sweet
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                12 °C / 53 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Sip after dinner, perhaps with coffee.
                            </td>
                        </tr>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Pedro Ximénez
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                An intensely sweet, dark dessert sherry with flavors and aromas of raisins and molasses.
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Sweet
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                13-14 °C / 55-57 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Pair with deserts for a decadent end to a meal.
                            </td>
                        </tr>
                        <tr>
                            <td className='border-bottom mx-auto col-2 center'>
                                Moscatel
                            </td>
                            <td className='border-bottom mx-auto col-4'>
                                A sweet desert sherry, Moscatel is treated the same as Pedro Ximénez, except it is more foral.
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                Sweet
                            </td>
                            <td className='border-bottom mx-auto col-2 center'>
                                13-14 °C / 55-57 °F
                            </td>
                            <td className='border-bottom mx-auto col-2'>
                                Pair with deserts for a decadent end to a meal.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <div className='h4 bold'>Sources</div>
                <ul className='list-reset' >
                    <li><a href='https://www.sherry.wine/' target='_blank' rel="noopener noreferrer" className='text-decoration-none ml3' >Sherry.org</a></li>
                    <li><a href='https://www.winemag.com/gallery/everything-you-need-to-know-about-sherry/' target='_blank' rel="noopener noreferrer" className='text-decoration-none ml3'>Everything You Need to Know About Sherry</a>, by Michael Schachner, <em>Wine Enthusiast</em></li>
                    <li><a href='http://blog.wine.com/2015/07/somme-things-i-think-about-which-sherry-is-right-for-you/' target='_blank' rel="noopener noreferrer" className='text-decoration-none ml3'>Somme Things to Think About: Which Sherry is Right for You?</a>, by Chris Parks, <em>Wine.com Blog</em></li>
                </ul>
            </section>
        </div>
    )
}