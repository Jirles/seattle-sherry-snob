import React from 'react';
import {CommentSection} from '../components/CommentSection';
import {connect} from 'react-redux';

class SherryShow extends React.Component {
    render(){
        const { sherry } = this.props;
        return(
            <div className='flex' >
                <section className='col-6 mx-auto my2'>
                    <h2>{sherry.name}</h2>
                    <div className='col-12' >
                    <img src={sherry.thumbnail_url} alt='A sherry bottle' className='fit inline mb0 shadow' />
                    <div className='col-6 h3 italic inline-block p2'>{sherry.tasting_note}</div>
                    </div>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th className='border-bottom border-right pr1'>
                                    Producer
                                </th>
                                <td className='border-bottom p1'>
                                    {sherry.producer}
                                </td>
                            </tr>
                            <tr>
                                <th className='border-bottom border-right pr1'>
                                    Region of origin
                                </th>
                                <td className='border-bottom p1'>
                                    {sherry.origin}
                                </td>
                            </tr>
                            <tr>
                                <th className='border-bottom border-right pr1'>
                                    Sugar content
                                </th>
                                <td className='border-bottom p1'>
                                    {sherry.sugar_content}
                                </td>
                            </tr>
                            <tr>
                                <th className='border-bottom border-right'>
                                    Price USD
                                </th>
                                <td className='border-bottom p1'>
                                    {sherry.price}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className='ml2 col-4 overflow-scroll m2 p2 border-left'>
                <CommentSection comments={sherry.comments} sherry_id={sherry.id}/>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    const sherry = state.sherries.find(sherry => sherry.id === parseInt(ownProps.match.params.sherryId, 10))
    return sherry ? { sherry } : {sherry: {} };
    
}

export default connect(mapStateToProps)(SherryShow);