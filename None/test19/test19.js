async function getData() {
    const url = 'https://hidden-union-334f.yuek.workers.dev/'; // Cloudflare Worker 的 API 網址
  
    try {
      const response = await fetch(url, {
        method: 'GET', // 或 'POST'，視 API 需求
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP 錯誤! 狀態碼: ${response.status}`);
      }
  
      const data = await response.json(); // 解析 JSON
      console.log(data); // 顯示資料
    } catch (error) {
      console.error('獲取資料時發生錯誤:', error);
    }
  }
  
  getData(); // 呼叫函式