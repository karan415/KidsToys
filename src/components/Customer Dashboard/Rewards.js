import React, { useState } from 'react'
import Transction from './TransctionTabel'
import reward from  '../images/image 13.png'
const Rewards = () => {
  const [tabelData, setTabelData] = useState(Transction)
  return (
    <>
      <div className="rewards">
        <div className="flex_box rewardflex">
          <div className="col_60">
            <div className="rewards_points">
              <div className="reward_coupen flex_box">
                <div className="img_rewards">
                  <img src={reward} alt="" /></div>
                <div className="content_reward"><h2><span className="green">60.20</span> reward points</h2>
                  <span>current balance</span>
                  <span className='text-center'>0.2 bonus points from your balance is expiring on monday 25 march 2024</span>
                  </div>
              </div>
              <div className="flex_box">
                <div className="col_33">
                  <div className="bg_green point_box shadow">
                    <span>total earned</span>
                    <h4>124.47</h4>
                  </div>
                </div>
                <div className="col_33">
                  <div className="bg_violet point_box shadow">
                    <span>total spent</span>
                    <h4>14.47</h4>
                  </div>
                </div>
                <div className="col_33">
                  <div className="bg_ligth_blue point_box shadow">
                    <span>expired</span>
                    <h4>0</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col_40">
            <div className="description_box">
              <h4>reward information</h4>
              <ul>
                <li>all the monetary, non-monetary and psychological payments that an organisation provides for its employees in exchange for the work they perform.</li>
                <li>all the monetary, non-monetary and psychological payments that an organisation provides for its employees in exchange for the work they perform.</li>
                <li>all the monetary, non-monetary and psychological payments that an organisation provides for its employees in exchange for the work they perform.</li>
              </ul>
              <span className="light underline"> click here for more information</span>
            </div>
          </div>
        </div>
        <div className="rewards_form shadow">
          <form action="">
            <div className="columns">
              <label htmlFor="">type</label>
              <select name="" id="" aria-placeholder='select type'>
                <option value="">select type</option>
              </select>
            </div>
            <div className="columns">
              <label htmlFor="">Points</label>
              <input type="search" name="" id="" placeholder='Search by points' />
            </div>
            <div className="columns">
              <label htmlFor="">Status</label>
              <select name="" id="" aria-placeholder='select status'>
                <option value="">select status</option></select>
            </div>
            <button type="submit" className='btn_borderd'>submit</button>
          </form>
        </div>
        <div className="transction_tabel">
          <h4>last transction</h4>
          <table>
            <thead>
              <tr><th>description</th>
                <th>type</th>
                <th>points</th>
                <th>status</th>
                <th>expiration date</th>
              </tr>
            </thead>
            <tbody>
              {tabelData.map((Elm, index) => {
                return (
                  <>
                    <tr key={index} id={Elm.id}>
                      <td>{Elm.title}{Elm.orderId}</td>
                      <td>{Elm.type}</td>
                      <td>{Elm.points}</td>
                      <td>{Elm.status}</td>
                      <td>{Elm.expirationdate}</td>
                    </tr>
                  </>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Rewards