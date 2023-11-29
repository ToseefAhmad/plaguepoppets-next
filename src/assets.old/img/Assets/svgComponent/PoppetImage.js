import React from "react";

const PoppetImage = (props) => {
  return (
    <svg
      width={props.width || "199"}
      height={props.height || "263"}
      viewBox="0 0 199 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M198 38.0001C197.8 34.0001 197.3 30.0001 194.5 26.9001C192.4 24.6001 191.2 22.0001 190.1 19.3001C189.2 16.8001 187.4 15.3001 184.8 14.9001C182.7 14.5001 180.5 14.4001 178.4 14.2001C174 13.9001 170.5 15.5001 167.7 18.8001C165.8 20.9001 164.1 23.2001 162 25.1001C157.1 29.5001 152.3 34.1001 146.9 38.1001C137 45.4001 127.3 53.1001 117.5 60.7001C112.8 64.4001 107.7 66.4 101.7 65.7001C98 65.3 94.3 65.5001 90.8 63.5001C83.2 59.3001 75.5 55.3001 68 51.1001C64 48.9001 60.2 46.4001 57.6 42.6001C55.8 39.9001 53.9 37.2001 52.3 34.3001C48.6 27.6001 44.3 21.4001 39.2 15.7001C37.5 13.8001 35.8 11.7001 34.7 9.50006C32.9 5.50006 29.8 3.30006 25.7 2.30006C25.1 2.20006 24.6 2.00006 24.1 1.80006C20 5.50747e-05 16.5 1.40006 13.3 4.00006C11.6 5.40006 9.90002 6.90006 8.30002 8.40006C5.80002 10.8001 3.80002 13.6001 3.30002 17.0001C2.60002 22.6001 1.80002 28.2001 1.50002 33.8001C1.10002 40.6001 0.900024 47.5001 0.900024 54.4001C0.900024 57.9001 1.00002 61.4001 1.50002 64.8001C2.10002 68.7001 3.30002 72.5001 4.00002 76.3001C6.30002 87.8001 7.90002 99.4001 9.10002 111.1C9.50002 115.5 10.4 119.8 11.2 124.1C11.5 125.5 12.1 127 12.3 128.4C13.2 134.9 14 141.5 14.8 148.1C15.5 153.2 17.2 157.9 20.7 161.8C21.5 162.7 22.2 163.9 22.8 165C23.9 167 24.8 169.2 26 171.1C28.7 175.8 31.8 180.2 36.2 183.4C40.3 186.4 44.5 189.3 49.2 191.4C50.9 192.1 52.5 193.2 54.1 194.3C58.1 197 62.2 199.3 67.3 198.9C67.5 198.9 67.8 198.9 68 198.9C68.6 199.2 69.2 199.5 69.8 199.8C69.5 200.3 69.3 201 68.8 201.4C67 203.2 65.9 205.2 65.8 207.8C65.7 209.3 65.6 210.8 65.4 212.2C64.9 215.4 65.7 218.3 67.2 221C67.5 221.6 67.8 222.3 67.8 223C67.9 225.9 68 228.8 68 231.6C68 239.7 68 247.8 68.1 255.9C68.1 259.5 69.5 261.2 72.9 262C78.5 263.3 84.1 263.2 89.7 262C91.5 261.6 92.7 260.6 93.6 259C94.8 256.6 94.9 254.2 94.7 251.6C94.6 250.8 94.6 249.9 94.6 249.1C97.5 249.3 100.3 249.5 103 249.6L103.2 249.8C103 252.5 102.7 255.2 102.6 258C102.5 260.7 103.4 261.6 106.1 262C110.7 262.7 115.2 262.9 119.9 262.2C122 261.9 123.9 261.3 125.6 260.2C126.1 259.9 126.6 259.4 126.7 258.8C127.1 256.9 127.5 254.9 127.4 253C127.1 244.2 126.7 235.4 126.3 226.6C126.2 224.1 125.3 221.6 127.2 219.4C127.3 219.3 127.3 219.2 127.3 219.1C128.4 213.3 128 207.8 124.2 202.9C123.5 202 123 200.9 122.6 199.8C121.9 197.9 122.5 197.1 124.5 196.7C133 195 141.5 192.9 149.1 188.6C155 185.3 160.9 181.7 165.1 176.3C167.4 173.4 168.9 169.9 170.8 166.7C172.3 164.2 173.1 161.5 173.1 158.5C173.1 153.6 173.3 148.7 173 143.9C172.4 135.1 171.3 126.3 171.7 117.5C171.9 112.4 171.2 107.5 168.9 102.9C168 101.1 168.1 99.1001 169.3 97.3001C173.7 90.8001 178 84.2001 182.4 77.7001C183.1 76.6001 184.2 75.7001 185 74.7001C186.5 72.9 188.1 71.3001 189.3 69.3001C193.6 62.0001 195.8 53.9001 197.4 45.7001C197.9 43.6001 198.1 40.7001 198 38.0001ZM73.8 201.8C74.9 202.2 76 202.4 77.1 202.8C80.2 204 83.3 204.7 86.7 204.3C89.8 203.9 92.5 204.9 95 206.9C95.4 207.3 95.9 207.6 96.3 207.9C96.5 207.8 96.7 207.8 96.7 207.8C98.3 205.2 100.4 204.9 103.4 205.2C106.1 205.5 109 204.6 111.7 203.8C113.9 203.2 116.1 202.1 118.2 201.2C118.9 200.9 119.5 200.5 120.1 200.2C120.2 200.3 120.3 200.5 120.4 200.6C118.3 202.2 116.4 204.2 114.1 205.4C111.8 206.7 109.2 207.3 106.7 208.2C105.3 208.7 103.8 209 102.5 209.6C99.9 210.9 99.1 212.8 99.3 215.7C99.6 219.3 101.1 222.4 103.5 225C105.2 226.9 107.4 227.6 109.9 226.9C114 225.7 118.2 224.5 122.3 223.3C122.8 223.2 123.3 222.9 123.8 222.7C123.9 222.8 124.1 223.1 124.1 223.1C123.4 223.8 122.9 224.6 122.1 225.1C119.2 227 116.2 228.8 113.1 230.5C112.2 231 111.1 231.3 110.1 231.6C106.8 232.6 103.9 232.3 101.7 229.4C101 228.6 100.4 227.7 99.8 226.8C99.6 226.9 99.4 227.1 99.1 227.2C98.8 227.7 98.6 228.2 98.4 228.6C97.4 230.7 95.8 231.8 93.6 231.8C84.3 231.7 75.8 229.3 69.2 222.3C69.2 222.3 69.2 222.2 69.2 221.9C71 222.8 72.5 223.7 74.2 224.4C79.2 226.6 84.4 227.7 89.8 227.6C94.3 227.6 97.2 224.5 96.4 219C96 216.5 95.3 214 94.5 211.6C93.9 209.6 92.2 208.5 90.1 208.1C88.9 207.8 87.6 208 86.3 207.7C81.9 207 77.9 205.4 74.4 202.6C74.2 202.5 74 202.2 73.9 202.1C73.9 202 73.9 202 73.8 201.8C73.8 202 73.8 201.9 73.8 201.8ZM81.9 168.3C81.1 168.9 80.4 169.6 79.6 170.2C79.7 170.4 79.8 170.6 79.9 170.7C81 170.5 82.1 170.3 83.2 170C89 168.4 94.6 168.7 100.2 171C102.5 172 104.9 172.8 107.4 173.8C109.3 174.5 111.3 175.2 113.3 176C119.3 178.2 125.3 179.1 131.4 176.5C132.4 176.1 133.6 176.3 134.6 176C135.3 175.8 136.1 175.4 136.7 174.9C137 174.7 137.1 174.2 137.2 173.8C137.5 174 137.7 174.1 138 174.3V174.4C137.9 175.7 137.8 177 137.7 178.4C137.6 178.4 137.4 178.4 137.3 178.4C137.1 178.1 136.9 177.8 136.7 177.6C135.6 176.1 134.5 176 132.9 177C131.2 178 129.6 179.1 127.8 179.7C123.6 181.1 119.4 182.6 114.8 182.3C109.1 181.9 104 179.8 99.5 176.5C95.1 173.3 90.2 172.3 84.9 173.3C81.8 173.9 78.7 173.8 75.6 172.9C74.9 172.7 74.1 172.8 73.4 172.8C73.3 171.3 78.2 168.7 81.9 168.3ZM72.4 165.6C66.5 165.6 61 164 56 160.6C54.9 159.8 54.5 158.9 54.5 157.6C54.5 153.4 55.7 149.5 57.5 145.8C61.3 138.3 66.5 132 73.4 127.1C76.2 125.1 77.1 125.3 79.7 127.6C81.2 128.9 82.9 130.1 84.2 131.5C88.2 135.8 90 140.8 89.8 147.1H89.9C90.1 154.3 86.7 160.1 80.3 163.9C78.2 165.1 75.1 165.6 72.4 165.6ZM131.2 144.5C132.7 142.7 134.2 140.8 136.7 140.4C137.4 140.3 138.4 140.3 138.9 140.7C144.4 144.9 148.5 149.8 148.2 157.3C148.1 158.7 148.1 160.3 147.8 161.8C147.7 162.5 147.1 163.3 146.6 163.6C141.3 166.3 134.6 164.9 131 160.4C127.2 155.8 127.3 149.3 131.2 144.5ZM188.6 42.7001C187.6 47.6001 186.4 52.4001 185.5 57.3001C184.6 61.8001 182.2 65.3001 179 68.5001C175.5 72.0001 172.3 75.8 169 79.6001C164.3 85.0001 162.3 91.5001 161.4 98.4001C161.1 100.6 161 102.8 161 105C161 110.4 161.9 115.7 163.2 120.9C163.4 121.9 163.7 122.8 163.9 123.8C165.6 130.3 167.4 136.7 167.4 143.4C167.4 145 167.8 146.6 168.1 148.3C168.7 152.5 168.1 156.6 166.5 160.5C164.4 165.6 162.6 170.9 158.6 174.9C158.4 175.1 158.2 175.3 158 175.5C155.5 178 152.8 180.5 150 182.7C146.2 185.8 142.1 188.5 137.5 190.6C131.9 193 126.3 195.3 120.4 196.7C119.3 197 118.2 197.2 117.1 197.4C115.9 197.6 114.6 198 113.4 198.2V198.1C113.4 198.1 113.4 198.1 113.3 198.1C113.3 197.9 113.2 197.8 113.2 197.6L113.3 197.7C113.6 197.6 114 197.5 114.3 197.4C116.4 196.5 118.5 195.8 120.4 194.6C123.7 192.7 126.6 190.2 129.9 188.4C136.5 184.7 141.8 179.5 145.7 173.2C148.6 168.3 151.4 163.1 151.3 157C151.3 153.8 152.4 150.5 152 147.4C151.6 144.5 150.9 141.7 149.4 139.3C148.5 137.9 147.3 136.6 145.7 135.6C141.9 133 138.3 130 134.5 127.5C130.1 124.6 125.6 122.1 120.6 120.7C116.7 119.6 112.8 118.5 108.8 117.7C106.5 117.2 104.1 117.1 101.6 117C97.4 116.9 93.3 116.9 89.1 116.9C88 116.9 86.9 117.1 85.8 117.3C79.9 118.6 74.7 121.5 69.7 124.8C67.8 126.1 66.2 127.8 64.8 129.7C60.8 135.1 56.9 140.7 54.3 147C52.7 150.7 51.4 154.6 51.6 158.7C51.9 162.9 52.4 167.1 54 171C54.1 171.2 54.2 171.5 54.3 171.7C54.5 172.1 54.6 172.5 54.8 172.9C54.9 173.1 55 173.2 55.1 173.4C55.3 173.9 55.6 174.4 55.9 174.8C56.9 176.5 57.7 178.4 58.8 180C60.8 183.1 62.8 186.2 64.9 189.1C65.6 190.1 66.3 191.1 67.1 192C68.4 193.7 70.7 194.6 72.6 195.8C73.6 196.5 74.7 197 75.8 197.6V197.7C75.8 197.7 75.9 197.7 75.9 197.8C75.9 198 75.8 198.1 75.8 198.3C74.6 198.2 73.3 198.2 72.1 198C71.6 197.9 71.2 197.9 70.7 197.8C69.8 197.6 68.9 197.4 68 197.4C64.5 197.1 61.5 195.3 58.8 193.4C50.8 187.6 42.8 181.8 35.5 175C33.9 173.6 32.7 171.6 31.6 169.8C31.5 169.7 31.5 169.6 31.4 169.5C31.3 169.3 31.1 169.1 31 168.9C29 165.6 27.1 162.2 25.1 158.9C24.6 158.1 24.2 157.3 23.7 156.5C21.1 151.9 19.7 147 20.1 141.8C20.6 135.7 19.8 129.9 18.5 124C17.4 119.3 16.5 114.6 15.8 109.8C15.5 107.9 15.5 105.8 15.6 103.8C15.7 98.8001 15.9 93.7001 16.1 88.7001C16.2 86.5001 16.2 84.4 16.5 82.2001C16.9 79.8 16.2 77.7001 15.2 75.6001C13.6 72.3 12 68.8001 10.8 65.3001C10.1 63.3001 10.2 61.0001 10 58.9001C9.50002 54.0001 9.30002 49.1001 8.50002 44.2001C7.60002 37.8001 8.40002 31.8001 11 25.9001C11.9 23.9001 12.4 21.9001 13.2 19.8001C14.5 16.5001 16.1 13.4001 20 12.4001C22.2 11.8001 24 12.5001 25.8 14.0001C30.2 17.7001 33.2 22.3001 36.2 27.0001C37 28.3001 37.8 29.5001 38.6 30.8001C39.8 32.6001 40.9 34.5001 42.1 36.3001C44.7 40.5001 47.4 44.6001 51 48.0001C54.3 51.1001 58.1 53.6001 61.6 56.4001C64.9 59.0001 68.5 60.8001 72.4 62.3001C74.2 63.0001 75.9 64.1001 77.6 64.8001C89.6 69.8001 101.7 71.6001 114.3 67.2001C118.2 65.8 121 63.1001 124.2 60.8001C129.8 56.7001 135.5 52.7001 141.3 48.7001C142.2 48.1001 143.3 47.6001 144.4 47.3001C151.7 44.7001 157.8 40.1001 163.4 34.9001C165.9 32.6001 168.4 30.2001 170.8 27.7001C171.2 27.3001 171.6 26.9001 171.9 26.5001C174.4 22.7001 182.1 21.7001 185.7 26.5001C186.2 27.2001 186.7 27.9001 187 28.9001C188.7 33.1001 189.6 37.9001 188.6 42.7001Z"
        fill={props.fill || "white"}
      />
    </svg>
  );
};

export default PoppetImage;