import React from 'react';
import dataStore from '../../../stores/dataStore';
import PageView from '../../PageView';
import TitleView from '../../TitleView';
import { State } from 'react-router';
import PageTitle from '../../../mixins/PageTitle';

export default React.createClass({
    mixins: [State, PageTitle],
    render() {
        return (
            <PageView>
                <TitleView>Overview</TitleView>
                <div className="markdown"
                     dangerouslySetInnerHTML={{__html: dataStore.getData().getOverview()}}>
                </div>
            </PageView>
        )
    }
});
