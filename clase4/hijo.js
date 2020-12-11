const {exec} = require('child_process')

;(function procesoBis(yr) {
   let str = ['cal February', yr, '|', 'grep 29', '|', 'wc -l', 
	   '|', `awk '{print "${yr}" " " $1 }' `].join(' ')
   
   exec(str, (err, stdout, stderr) => {
      console.log(stdout)
      setTimeout(()=>{ procesoBis(yr+1) }, 400)
   })

}(1950))

