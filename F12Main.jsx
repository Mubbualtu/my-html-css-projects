const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/Ac1'>/Ac1</a></td>
            <td style={tableCellStyle}><a href='/Ac1'>AC1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Ac2'>/Ac2</a></td>
            <td style={tableCellStyle}><a href='/Ac2'>AC2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Ac3'>/Ac3</a></td>
            <td style={tableCellStyle}><a href='/Ac3'>AC3</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/FanPage1'>/FanPage1</a></td>
            <td style={tableCellStyle}><a href='/FanPage1'>FAN-PAGE1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/FanPage2'>/FanPage2</a></td>
            <td style={tableCellStyle}><a href='/FanPage2'>FAN-PAGE2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/FanPage3'>/FanPage3</a></td>
            <td style={tableCellStyle}><a href='/FanPage3'>FAN-PAGE3</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/FanPageOff'>/FanPageOff</a></td>
            <td style={tableCellStyle}><a href='/FanPageOff'>FAN-PAGE-off</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/HomePage'>/HomePage</a></td>
            <td style={tableCellStyle}><a href='/HomePage'>HOME-PAGE</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LightOff'>/LightOff</a></td>
            <td style={tableCellStyle}><a href='/LightOff'>light-off</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LightOn'>/LightOn</a></td>
            <td style={tableCellStyle}><a href='/LightOn'>light-on</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LightOn1'>/LightOn1</a></td>
            <td style={tableCellStyle}><a href='/LightOn1'>light-on1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LightOn2'>/LightOn2</a></td>
            <td style={tableCellStyle}><a href='/LightOn2'>light-on2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LightOnColorBlue'>/LightOnColorBlue</a></td>
            <td style={tableCellStyle}><a href='/LightOnColorBlue'>light-on-color-blue</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LightOnColorPink'>/LightOnColorPink</a></td>
            <td style={tableCellStyle}><a href='/LightOnColorPink'>light-on-color-pink</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LightOnColorYellow'>/LightOnColorYellow</a></td>
            <td style={tableCellStyle}><a href='/LightOnColorYellow'>light-on-color-yellow</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LivingRoom'>/LivingRoom</a></td>
            <td style={tableCellStyle}><a href='/LivingRoom'>living room</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/MenuSlider'>/MenuSlider</a></td>
            <td style={tableCellStyle}><a href='/MenuSlider'>menu-slider</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/WelcomPage'>/WelcomPage</a></td>
            <td style={tableCellStyle}><a href='/WelcomPage'>welcom-page</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}