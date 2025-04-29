import { utils, Wallet } from 'zksync-web3';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Deployer } from '@matterlabs/hardhat-zksync-deploy';
import * as ethers from 'ethers';

export default async function (hre: HardhatRuntimeEnvironment) {
  const wallet = new Wallet(hre.network.config.accounts[0]);
  const deployer = new Deployer(hre, wallet);
  const factoryArtifact = await deployer.loadArtifact('PayFlowFactory');
  const artifact = await deployer.loadArtifact('PayFlow');

  // Getting the bytecodeHash of the account
  const bytecodeHash = utils.hashBytecode(artifact.bytecode);

  const factory = await deployer.deploy(factoryArtifact, [bytecodeHash], undefined, [
    // Since the factory requires the code of the multisig to be available,
    // we should pass it here as well.
    artifact.bytecode
  ]);

  console.log(`PayFlow factory address: ${factory.address}`);

  const abiCoder = new ethers.utils.AbiCoder();
  console.log(`args encoded: ${abiCoder.encode(['bytes32'], [bytecodeHash])}`);

  await hre.run('verify:verify', {
    address: factory.address,
    contract: 'contracts/PayFlowFactory.sol:PayFlowFactory',
    constructorArguments: [bytecodeHash]
  });
}
