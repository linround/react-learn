import React from "react";
import _ from 'lodash'

function square(n) {
    return n * n;
}

const addSquare = _.flowRight([square, _.add]);

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // 假设 "DataSource" 是个全局范围内的数据源变量
            // comments: DataSource.getComments()
        };
    }

    componentDidMount() {
        // 订阅更改
        // DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        // 清除订阅
        // DataSource.removeChangeListener(this.handleChange);
    }
    add() {
        console.log(addSquare(1, 2))
    }
    handleChange() {
        // 当数据源更新时，更新组件状态
        this.setState({
            // comments: DataSource.getComments()
        });
    }

    render() {
        return (
            <div onClick={this.add}>
                hocks
            </div>
        );
    }
}
export default CommentList