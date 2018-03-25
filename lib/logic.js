/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.biznet.confirmTranswer} confirmTranswer - the transfer to be processed
 * @transaction
 */


function confirm(confirmTranswer) {

    return getAssetRegistry('org.acme.biznet.transferAsset')
    .then(function (registry) {
        var factory = getFactory();
        // Create the bond asset.
        var transferAsset = factory.newResource('org.acme.biznet', 'transferAsset', confirmTranswer.newStatus);
        transferAsset.transfer = confirmTranswer.transfer;
        // Add the bond asset to the registry.
        return registry.add(transferAsset);
    });
}
