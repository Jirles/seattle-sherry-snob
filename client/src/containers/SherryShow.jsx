import React from 'react';
import {CommentSection} from '../components/CommentSection';
import {connect} from 'react-redux';

class SherryShow extends React.Component {
    render(){
        const { sherry } = this.props;
        return(
            <div>
                <h3>{sherry.name}</h3>
                <img src={sherry.thumbnail_url} alt='A sherry bottle' width='320' height='320' />
                    
                <h4><em>{sherry.tasting_note}</em></h4>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                Producer
                            </th>
                            <td>
                                {sherry.producer}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Region of origin
                            </th>
                            <td>
                                {sherry.origin}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Sugar content
                            </th>
                            <td>
                                {sherry.sugar_content}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Price USD
                            </th>
                            <td>
                                {sherry.price}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <CommentSection comments={sherry.comments} sherry_id={sherry.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    const sherry = state.sherries.find(sherry => sherry.id === parseInt(ownProps.match.params.sherryId, 10))
    return sherry ? { sherry } : {sherry: {} };
    
}

export default connect(mapStateToProps)(SherryShow);