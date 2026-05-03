module.exports = {
  apps : [{
    name: "elmahrosa-notebook",
    script: "C:/Program Files/Python312/python.exe",
    args: "-m streamlit run app_home.py --server.port 8501 --server.headless true",
    cwd: "./",
    env: {
      NODE_ENV: "production"
    }
  }]
}
