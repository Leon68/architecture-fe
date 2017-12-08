import React from 'react'
import "./detail.scss"
export class SaleDetail extends React.Component {
    render() {
        return (
            <div className="sale-detail-wrapper">
                <div className="detail-img"></div>
                <div className="detail-info">
                    <h1>雷神</h1>
                    <div>2017.12</div>
                    <button>点我购买</button>
                </div>

            </div>
        )
    }
}