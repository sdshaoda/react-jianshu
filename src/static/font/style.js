import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {
  font-family: "icon";
  src: url('./icon.eot?t=1539008909036'); /* IE9*/
  src: url('./icon.eot?t=1539008909036#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVoAAsAAAAAB5wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8i0goY21hcAAAAYAAAABeAAABnLOwG3FnbHlmAAAB4AAAAYgAAAGMQ+rSQWhlYWQAAANoAAAALwAAADYS4lkVaGhlYQAAA5gAAAAcAAAAJAfeA4VobXR4AAADtAAAAA4AAAAQEAAAAGxvY2EAAAPEAAAACgAAAAoA/gCCbWF4cAAAA9AAAAAeAAAAIAESADxuYW1lAAAD8AAAAUIAAAI9Divfm3Bvc3QAAAU0AAAAMwAAAER7M1/weJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeiT4zY27438AQw9zA0AAUZgTJAQDi4AwueJztkDEOgDAIRR+2msa4eoKujqYHcvLkXKMCdfAQfvII/PwwAMxAMg4jg9wIrstcCT+xhp9ptherCXTXqq337xSSSJS4Kp6UhV9b9PPdkn9tEHMd+L+1DZgebsMS4gAAeJwVkM9KG1EYxb9zv5m5IcZEkkxidJKa3M5MpGLC5M9U0aRCBUFad6IEKggtxa5Ku6p0UWbTdluXxW7sVp+gkGL6ALpy4aJQEHyDFtqx182Bcza/cw4JoptT/sbLlKUKkdtDOA8/DVlBMeiGMhe62utU+zTEcLoCY/TpYMQ8OngUNfl3/d+v/SPmo/03t/p37vnC4ZlhnB1qXVkw4z/3vhrHUXTCfBJFx0SG5t3wkIkkZeguNYiqyq9KhVaOPV9Zks1uKyhDdZSlal6n3Udb1aSG2/lCK+gu6xLP1uKL1afI7D58YVrClHu4aPZe3Ud1ZT7ce/JgsbFTL89Muc3zc6Z4Fv0JT+Xi76bz+kej25zdTKfW3S3TKdlO4OrNdPvBO97mt5Qmj6gP9LEE5XuWnQGKVkZYXgM5L9R5TxTuoAIZfwGXOvgA0RHx1c+UfZlwgoQoiRSmzfbYjF/PvncL9vhLDOcGEBsABkY8+TGf/Cxk2UkgVczjOjnITo5ZycfFDc39D9IpVQR4nGNgZGBgAGL12ZIO8fw2Xxm4WRhA4PrDrl4E/b+RhYG5FsjlYGACiQIAHR8KeAB4nGNgZGBgbvjfwBDDwgACQJKRARWwAABHCgJteJxjYWBgYEHCAACwABEAAAAAAAAAOACCAMYAAHicY2BkYGBgYTAAYhBgAmIuIGRg+A/mMwAADcIBTwAAeJxdkMtOwkAUhv9CQS2JC40m7mZhjNGkXFwY2ZLAngV7KFMuaTvNdCDhaVz6BC5d+hQmbnwR/5YDCzo5p9/5z20yAK7wCw/774a2Zw8+oz3XcIY74Tp1Jezz3As30MKjcJP6i3CAZ7wKt3CNGSd4/gWjJ2yEPZzjXbiGS3wI16l/CvvkL+EGbvEt3KT+Ixxggj/hFh68t2Bg9dTpuZrt1CoyWWwyF5Qw1otNMrUlljbRtliZTHXDThmOdKbtoa/YLnrOxSq2JlVDDtBJYlRuzVpHLlw6l/fb7Vj0MDIprzGAhcYUjn7O55phR79CBIMMceUd6w7KmHULPkfCHntUD/8JsxYF4zJS6CJE55gdMZtVFaf7Cmw5tUfVcaeiWXakpKHcQHNjQlbIq9yaSkQ9xLLqytFHmyc+qQ+r3ek/PzhhdgAAeJxjYGKAAC4G7ICFkYmRmZGFkZWBrTg1sSg5g8kxkSczOT9PNzkjNTk7M4+BAQBt0gf6AA==') format('woff'), url('./icon.ttf?t=1539008909036') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./icon.svg?t=1539008909036#icon') format('svg'); /* iOS 4.1- */
}

.icon {
  font-family: "icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.i-search:before {
  content: "\\e623";
}

.i-Aa:before {
  content: "\\e636";
}

.i-icon-checkin:before {
  content: "\\e615";
}
`;
