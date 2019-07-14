import React from 'react';
import { View,FlatList} from 'native-base';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

//comps
import Layout from '../shared/layout'
import strings from '../../shared/strings';

class Home extends React.Component {
    componentWillMount() {
    }


    render() {
        const data = this.state.items.map(x => ({ ...x, selected: false, key: x.id.toString() }))
        return (
            <Layout>
                {this.state.header}
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <FlatList
                        style={{}}
                        data={data}
                        renderItem={(item) => (<CostItem item={item.item} onPressItem={this._onPressItem.bind(this)} />)}
                        extraData={this.state}
                        onEndReached={this._getCosts.bind(this)}
                        onEndReachedThreshold={0.1}
                    >
                    </FlatList>
                </View>
            </Layout>

        );
    }
}

const mapStateToProps = state => {
    return { ...state};
}

const mapDispatchToProps = dispatch => {
    return {
        setIds: (ids) => { dispatch(setIds(ids)); },

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);