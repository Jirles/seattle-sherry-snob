import React from 'react';
import {CommentSection} from '../components/CommentSection';
import {connect} from 'react-redux';

class SherryShow extends React.Component {
    render(){
        return(
            <div>
                <h3>{this.props.sherry.name}</h3>
                <img src={this.props.sherry.thumbnail_url} alt='A sherry bottle' width='420' height='320' />
                    
                <h4><em>{this.props.sherry.tasting_note}</em></h4>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                Producer
                            </th>
                            <td>
                                {this.props.sherry.producer}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Region of origin
                            </th>
                            <td>
                                {this.props.sherry.origin}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Sugar content
                            </th>
                            <td>
                                {this.props.sherry.sugar_content}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Price USD
                            </th>
                            <td>
                                {this.props.sherry.price}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <CommentSection />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    const sherry = state.sherries.find(sherry => sherry.id === parseInt(ownProps.match.params.sherryId, 10))
    
    if (sherry){
        return { sherry };
    } else {
        return { sherry: {} };
    };
    
}

export default connect(mapStateToProps)(SherryShow);