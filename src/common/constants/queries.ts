// import { GetShipperRecoveryAddressFilterDto } from '../../shippers/shipper-recovery-address/dto/get-shipper-recovery-address-filter.dto';
// import { GetStreetShipmentsFilterDto } from '../../covers/dto/get-street-shipments-filter.dto';
// import { StatusType } from '../../covers/enum/statusType.enum';
// import { GetRescuesFilterDto } from '../../rescue/dto/get-rescues-filter.dto';

export const userQueries = {
  queries: {
    getUserAuth: `
      query
      getUserAuth($permissions: [String!]!, $apiName: String!) {
        getUserAuth(permissions: $permissions, apiName: $apiName )
      }`,
    getNamesByIds: `
      query
      getNamesByIds($ids: [String!]!) {
        getNamesByIds(ids: $ids){fullName}
      }`,
    getUserData: `
        {getUserData{id, fullName, email}}
      `,
    getUserAuthV2: `
      query
      getUserAuthV2($permissions: [JSON!], $apiName: String!) {
        getUserAuthV2(permissions: $permissions, apiName: $apiName )
      }`,
  },
  mutations: {},
};

// export function queryFromMulti() {
//   return `FROM
//   (
//     SELECT "piece".* FROM "piece","order" "ord"
//     WHERE 
//       "ord"."trackingId" = $1 AND
//       "ord".id = "piece"."orderId"
//     UNION
//     SELECT "piece".* FROM "piece", "order" "ord", "multi_pieces"
//     WHERE
//       "multi_pieces"."codMulti" = $1 AND
//       "multi_pieces"."id" ="piece"."codMulti" AND
//       "ord".id = "piece"."orderId"
//   ) as "piece"
//   LEFT JOIN "order" "order" ON
//   "order"."id" = "piece"."orderId"`;
// }

// export function getValidatePieceBaseQuery() {
//   return `SELECT
//       "piece"."id" AS "piece_id",
//       "piece"."SKU" AS "piece_SKU",
//       "piece"."isActive" AS "piece_isActive",
//       "piece"."height" AS "piece_height",
//       "piece"."width" AS "piece_width",
//       "piece"."length" AS "piece_length",
//       "piece"."weight" AS "piece_weight",
//       "piece"."height_urbano" AS "piece_height_urbano",
//       "piece"."width_urbano" AS "piece_width_urbano",
//       "piece"."length_urbano" AS "piece_length_urbano",
//       "piece"."weight_urbano" AS "piece_weight_urbano",
//       "piece"."description" AS "piece_description",
//       "piece"."updatedAt" AS "piece_updatedAt",
//       "order"."id" AS "order_id",
//       "order"."trackingId" AS "order_trackingId",
//       "order"."address" AS "order_address",
//       "order"."zipCode" AS "order_zipCode",
//       "order"."province" AS "order_province",
//       "order"."state" AS "order_state",
//       "order"."piecesQuantity" AS "order_piecesQuantity",
//       "container"."id" AS "container_id",
//       "container"."trackingId" AS "container_trackingId",
//       "physicalIncome"."id" AS "physicalIncome_id",
//       "physicalIncome"."createdAt" AS "physicalIncome_createdAt",
//       "deliveryInfo"."id" AS "deliveryInfo_id",
//       "shipper"."id" AS "shipper_id",
//       "shipper"."name" AS "shipper_name",
//       "shipper"."idShipper" AS "shipper_idShipper",
//       "receiver"."fullName" AS "receiver_fullName",
//       "receiver"."id" AS "receiver_id",
//       "currentStage"."id" AS "currentStage_id",
//       "currentStage"."name" AS "currentStage_name",
//       "chanelledNode"."id" AS "chanelledNode_id",
//       "chanelledNode"."name" AS "chanelledNode_name",
//       "surrenderChanelledNodeTemp"."id" AS "surrenderChanelledNodeTemp_id",
//       "surrenderChanelledNodeTemp"."name" AS "surrenderChanelledNodeTemp_name",
//       "codMulti"."codMulti" AS "codMulti_codMulti",
//       "codMulti"."id" AS "codMulti_id",
//       "service"."id" AS "service_id",
//       "service"."name" AS "service_name",
//       "weighingPending"."id" AS "weighingPending_id",
//       "weighingPending"."piecesQuantity" AS "weighingPending_piecesQuantity",
//       "stagesHistory"."id" AS "stagesHistory_id",
//       "moment"."id" AS "moment_id",
//       "moment"."display_name" AS "moment_display_name",
//       "agreedOrderDetails"."id" AS "agreedOrderDetails_id",
//       "agreedOrderDetails"."agreedDate" AS "agreedOrderDetails_agreedDate",
//       "agreedOrderDetails"."observations" AS "agreedOrderDetails_observations",
//       "agreedOrderDetails"."createdAt" AS "agreedOrderDetails_createdAt",
//       "agreedOrderDetails"."updatedAt" AS "agreedOrderDetails_updatedAt",
//       "recordedStage"."id" as "recordedStage_id",
//       "recordedStage"."name" as "recordedStage_name",
//       "recordedStage"."name" as "recordedStage_name",
//       "routingPiece"."id" AS "routingPiece_id",
//       "routingPiece"."transport" AS "routingPiece_transport",
//       "routingPiece"."tract" AS "routingPiece_tract",
//       "routingPiece"."createdAt" AS "routingPiece_createdAt",
//       "routingPiece"."updatedAt" AS "routingPiece_updatedAt",
//       "routingPiece"."routingRequest" AS "routingPiece_routingRequest",
//       "routingPiece"."piece" AS "routingPiece_piece",
//       "stageType"."id" as "stageType_id",
//       "stageType"."name" as "stageType_name",
//       "stageType"."display_name" as "stageType_display_name",
//       "lastStageHistory"."id" AS "lastStageHistory_id",
//       "lastMoment"."id" AS "lastMoment_id",
//       "lastMoment"."display_name" AS "lastMoment_displayName",
//       "productShipper"."isActive" AS "productShipper_isActive",
//       "productShipper"."shipperId" AS "productShipper_shipperId",
//       "productShipperProducts"."productId" AS "productShipper_productId",
//       "productShipper"."dimensionalFactor" AS "productShipper_dimensionalFactor",
//       "productShipper"."dimensionalFactorLimit" AS "productShipper_dimensionalFactorLimit",
//       "productShipper"."urbanoBilledWeight" AS "productShipper_urbanoBilledWeight",
//       "productShipper"."priorityBilledWeight" AS "productShipper_priorityBilledWeight",
//       "productShipper"."assumesWeightAsBillable" AS "productShipper_assumesWeightAsBillable",
//       "productShipper"."billedWeight" AS "productShipper_billedWeight",
//       "productShipper"."rejectsPiecesWithoutWeight" AS "productShipper_rejectsPiecesWithoutWeight",
//       "product"."id" AS "product_id" ,
//       "product"."name" AS "product_name",
//       "product"."isActive" AS "product_isActive", 
//       "product"."weighing" AS "product_weighing"
//       FROM "piece" "piece" 
//       INNER JOIN "order" "order" ON
//       "order"."id" = "piece"."orderId"
//       LEFT JOIN "container" "container" ON
//       "container"."id" = "piece"."containerId"
//       LEFT JOIN "physical_income" "physicalIncome" ON
//       "physicalIncome"."id" = "piece"."physicalIncome"
//       LEFT JOIN "delivery_info" "deliveryInfo" ON
//       "deliveryInfo"."pieceId" = "piece"."id"
//       LEFT JOIN "shipper" "shipper" ON
//       "shipper"."id" = "order"."shipper"
//       LEFT JOIN "receiver" "receiver" ON
//       "receiver"."orderId" = "order"."id"
//       LEFT JOIN "stage" "stage" ON
//       "stage"."id" = "order"."stageId"
//       LEFT JOIN "stage" "currentStage" ON
//       "currentStage"."id" = "piece"."currentStageId"
//       LEFT JOIN "node" "chanelledNode" ON
//       "chanelledNode"."id" = "order"."chanelledNodeId"
//       LEFT JOIN "node" "surrenderChanelledNodeTemp" ON
//       "surrenderChanelledNodeTemp"."id" = "order"."surrenderChanelledNodeTempId"
//       LEFT JOIN "multi_pieces" "codMulti" ON
//       "codMulti"."id" = "piece"."codMulti"
//       LEFT JOIN "services" "service" ON
//       "service"."id" = "order"."service"
//       LEFT JOIN "weighing_pending" "weighingPending" ON
//       "weighingPending"."id" = "piece"."weighingPendingId"
//       LEFT JOIN "stages_history" "stagesHistory" ON
//       "stagesHistory"."pieceId" = "piece"."id"
//       LEFT JOIN "stage" "recordedStage" on "recordedStage"."id" = "stagesHistory"."stageId"
//       LEFT JOIN "stages_type" "stageType" on "stageType"."id" = "recordedStage"."stage_type"
//       LEFT JOIN "moments" "moment" ON
//       "moment"."id" = "stagesHistory"."momentId"
//       LEFT JOIN "stages_history" "lastStageHistory" ON
//       "lastStageHistory"."id" = "piece"."currentStageHistoryId"
//       LEFT JOIN "moments" "lastMoment" ON
//       "lastMoment"."id" = "lastStageHistory"."momentId"
//       LEFT JOIN "agreed_orders_detail" "agreedOrderDetails" ON
//       "agreedOrderDetails"."id" = "order"."agreedOrderDetailsId"
//       LEFT JOIN "routing_piece" "routingPiece" ON
//         "routingPiece"."piece" = "piece"."id"
//       JOIN "product" "product" on "order"."product" = "product"."id"
//       JOIN "product_shipper_products_product" "productShipperProducts" on "product".id = "productShipperProducts"."productId"
//       JOIN "product_shipper" "productShipper" on "productShipperProducts"."productShipperId" = "productShipper".id and "productShipper"."shipperId" = "order".shipper
//         WHERE 1=1 
//         AND "order"."id" = $1 `;
// }

// // COVERS STREET SHIPMENTS QUERIES
// export function getStreetShipmentsResultsQuery(
//   query: GetStreetShipmentsFilterDto,
// ) {
//   return `
//     SELECT
//       "cover"."id" "coverId",
//       "cover"."coverNumber",
//       "cover"."createdAt" "distributionDate",
//       ("carrier_entry"."carrierId"::text || ' - ' || "carrier_entry"."carrierName") "carrier",
//       ${getTotalShipmentsSubquery()},
//       ${getInformedShipmentsSubquery()},
//       ${getNotInformedShipmentsSubquery()},
//       ${getNotVisitedShipmentsSubquery()},
//       ${getPendingShipmentsSubquery()}
//     FROM PUBLIC."cover"
//       LEFT JOIN "node" "coverNode" ON "cover"."nodeId" = "coverNode"."id"
//       LEFT JOIN "carrier_entry" ON "carrier_entry"."cover" = "cover"."id"
//       LEFT JOIN "cover_content_entry" "coverContent" ON "coverContent"."coverId" = "cover"."id"
//       LEFT JOIN "cover_content_entry_container" "coverContentEntryContainer" ON "coverContentEntryContainer"."coverContentEntryId" = "coverContent"."id"
//     WHERE "coverNode"."id" = $1 AND "carrier_entry"."entryType" = $2 ${getShipmentsFilterCriteriaInWhereClause(
//       query,
//     )}
//     GROUP BY "cover"."id", "carrier_entry"."id"
//     ${getShipmentsFilterCriteriaInHavingClause(query)}
//     ORDER BY ${
//       query.sort ? getShipmentsSortCriteria(query.sort) : `"cover"."id"`
//     } ${
//     query.order ? getShipmentsOrderCriteria(query.order) : 'DESC'
//   } NULLS LAST
//     LIMIT ${query.limit} ${
//     query.page > 1 ? `OFFSET ${query.limit * (query.page - 1)}` : ''
//   }
//   `;
// }

// export function getDispatchQuery(ordersId) {
//   return `
//     SELECT  *
//       FROM "dispatch_orders_related_order" as "doro" 
//     WHERE "doro"."orderId" in (${ordersId})
//     ORDER BY "dispatchId" ASC;
//   `;
// }

// export function getObservationDispatchQuery(dispatchId) {
//   return `
//     SELECT  *
//       FROM "dispatch_observations_history" as "doh" 
//     WHERE "doh"."dispatch" in (${dispatchId})
//     ORDER BY "dispatch" ASC;
//   `;
// }

// export function getCoversIdEntity(entity, id) {
//   let filterEntity = entity && entity.length ? entity.toString() : null;
//   let filterId = id && id.length ? id.toString() : null;
//   return `
//     SELECT "c"."id" as "coverId"
//       FROM "cover_content_entry" as "cce"
//     LEFT JOIN "cover" "c" ON "c"."id" = "cce"."coverId"  
//     WHERE "cce"."entityId" in (${filterEntity}) or "cce"."id" in (${filterId})
//   `;
// }

// export function getCoverContentDetailsQuery() {
//   return `
//   SELECT "entryId",
//   "id",
//   "trackingId",
//   "statusDistribution",
//   "piecesQuantity",
//   "entityType",
//   "coverContentEntryContainerId"
// FROM
//   (SELECT COVER_CONTENT_ENTRY."id" "entryId",
//       "order"."id" "id",
//       "order"."trackingId" "trackingId",
//       "order"."piecesQuantity" "piecesQuantity",
//       COVER_CONTENT_ENTRY."statusDistribution",
//       COVER_CONTENT_ENTRY."entityType",
//       COVER_CONTENT_ENTRY_CONTAINER.id "coverContentEntryContainerId"
//     FROM COVER_CONTENT_ENTRY
//     LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//     LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//     LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//     WHERE COVER_CONTENT_ENTRY."coverId" = $1
//       AND COVER_CONTENT_ENTRY."entityType" = 0
//     UNION ALL SELECT COVER_CONTENT_ENTRY."id" "entryId",
//       CASE COVER_CONTENT_ENTRY_CONTAINER."entityType"
//         WHEN 4 THEN COVER_CONTENT_ENTRY_CONTAINER."entityId"
//         ELSE "order"."id"
//       END "id",
//       CASE COVER_CONTENT_ENTRY_CONTAINER."entityType"
//         WHEN 4 THEN ('CSURR' || COVER_CONTENT_ENTRY_CONTAINER."entityId"::text)
//         ELSE "order"."trackingId"
//       END "trackingId",
//       CASE COVER_CONTENT_ENTRY_CONTAINER."entityType"
//         WHEN 4 THEN 1
//         ELSE "order"."piecesQuantity"
//       END "piecesQuantity",
//       COVER_CONTENT_ENTRY_CONTAINER."statusDistribution",
//       CASE COVER_CONTENT_ENTRY_CONTAINER."entityType"
//         WHEN 4 THEN COVER_CONTENT_ENTRY_CONTAINER."entityType"
//         ELSE COVER_CONTENT_ENTRY."entityType"
//       END "entityType",
//       COVER_CONTENT_ENTRY_CONTAINER.id "coverContentEntryContainerId"
//     FROM COVER_CONTENT_ENTRY
//     LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//     LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY_CONTAINER."entityId"
//     LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//     WHERE COVER_CONTENT_ENTRY."coverId" = $1
//       AND COVER_CONTENT_ENTRY."entityType" = 1
//     UNION ALL SELECT COVER_CONTENT_ENTRY."id" "entryId",
//       "container"."id",
//       "container"."trackingId" "trackingId",
//       "container"."id",
//       COVER_CONTENT_ENTRY."statusDistribution",
//       COVER_CONTENT_ENTRY."entityType",
//       COVER_CONTENT_ENTRY_CONTAINER.id "coverContentEntryContainerId"
//     FROM COVER_CONTENT_ENTRY
//     LEFT JOIN CONTAINER ON CONTAINER.ID = COVER_CONTENT_ENTRY."entityId"
//     LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//     WHERE COVER_CONTENT_ENTRY."coverId" = $1
//       AND COVER_CONTENT_ENTRY."entityType" = 4) RESULT
//     ORDER BY "entryId", "coverContentEntryContainerId";
//   `;
// }

// function getTotalShipmentsSubquery() {
//   return `(SELECT SUM("totalShipments")::smallint "totalShipments"
//     FROM
//       (SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "totalShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 0
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "totalShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY_CONTAINER."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 1
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(*) "totalShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id"  AND COVER_CONTENT_ENTRY."entityType" NOT IN (0, 1)) X
//     GROUP BY ID)`;
// }

// function getInformedShipmentsSubquery() {
//   return `(SELECT SUM("informedShipments")::smallint "informedShipments"
//      FROM
//       (SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "informedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 0 AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.INFORMED_DELIVERY}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "informedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY_CONTAINER."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 1 AND COVER_CONTENT_ENTRY_CONTAINER."statusDistribution" = '${StatusType.INFORMED_DELIVERY}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(*) "informedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id"  AND COVER_CONTENT_ENTRY."entityType" NOT IN (0, 1) AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.INFORMED_DELIVERY}') X
//     GROUP BY ID)`;
// }

// function getNotInformedShipmentsSubquery() {
//   return `(SELECT SUM("notInformedShipments")::smallint "notInformedShipments"
//     FROM
//       (SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "notInformedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 0 AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.NOT_DELIVERED_VISIT}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "notInformedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY_CONTAINER."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 1 AND COVER_CONTENT_ENTRY_CONTAINER."statusDistribution" = '${StatusType.NOT_DELIVERED_VISIT}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(*) "notInformedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id"  AND COVER_CONTENT_ENTRY."entityType" NOT IN (0, 1) AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.NOT_DELIVERED_VISIT}') X
//     GROUP BY ID)`;
// }

// function getNotVisitedShipmentsSubquery() {
//   return `(SELECT SUM("notVisitedShipments")::smallint "notVisitedShipments"
//     FROM
//       (SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "notVisitedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 0 AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.NOT_VISITED}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "notVisitedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY_CONTAINER."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 1 AND COVER_CONTENT_ENTRY_CONTAINER."statusDistribution" = '${StatusType.NOT_VISITED}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(*) "notVisitedShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id"  AND COVER_CONTENT_ENTRY."entityType" NOT IN (0, 1) AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.NOT_VISITED}') X
//     GROUP BY ID)`;
// }

// function getPendingShipmentsSubquery() {
//   return `(SELECT SUM("pendingShipments")::smallint "pendingShipments"
//     FROM
//       (SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "pendingShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 0 AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.PENDING}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(DISTINCT("order"."trackingId")) "pendingShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY_CONTAINER."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id" AND COVER_CONTENT_ENTRY."entityType" = 1 AND COVER_CONTENT_ENTRY_CONTAINER."statusDistribution" = '${StatusType.PENDING}'
//         UNION ALL 
//       SELECT 1 AS ID, COUNT(*) "pendingShipments"
//       FROM COVER_CONTENT_ENTRY
//         LEFT JOIN COVER_CONTENT_ENTRY_CONTAINER ON COVER_CONTENT_ENTRY_CONTAINER."coverContentEntryId" = COVER_CONTENT_ENTRY.ID
//         LEFT JOIN PIECE ON PIECE.ID = COVER_CONTENT_ENTRY."entityId"
//         LEFT JOIN "order" ON "order".ID = PIECE."orderId"
//       WHERE "coverId" = "cover"."id"  AND COVER_CONTENT_ENTRY."entityType" NOT IN (0, 1) AND COVER_CONTENT_ENTRY."statusDistribution" = '${StatusType.PENDING}') X
//     GROUP BY ID)`;
// }

// function getShipmentsFilterCriteriaInWhereClause(
//   query: GetStreetShipmentsFilterDto,
// ) {
//   const filterCriteria = [];

//   if (query.createdAtFrom && query.createdAtTo) {
//     filterCriteria.push(
//       `"cover"."createdAt" BETWEEN '${query.createdAtFrom}' AND '${query.createdAtTo}'`,
//     );
//   }

//   if (query.coverNumber) {
//     filterCriteria.push(`"cover"."coverNumber" ILIKE '%${query.coverNumber}%'`);
//   }

//   if (query.carrier) {
//     filterCriteria.push(
//       `("carrierId" ILIKE '${query.carrier}%' OR "carrierName" ILIKE '%${query.carrier}%')`,
//     );
//   }

//   if (filterCriteria.length > 0) {
//     return `AND ${filterCriteria.join(' AND ')}`;
//   }

//   return '';
// }

// function getShipmentsFilterCriteriaInHavingClause(
//   query: GetStreetShipmentsFilterDto,
// ) {
//   const filterCriteria = [];

//   if (query.totalShipments) {
//     filterCriteria.push(
//       `${getTotalShipmentsSubquery()} = ${query.totalShipments}`,
//     );
//   }

//   if (query.informedShipments) {
//     filterCriteria.push(
//       `${getInformedShipmentsSubquery()} = ${query.informedShipments}`,
//     );
//   }

//   if (query.notInformedShipments) {
//     filterCriteria.push(
//       `${getNotInformedShipmentsSubquery()} = ${query.notInformedShipments}`,
//     );
//   }

//   if (query.notVisitedShipments) {
//     filterCriteria.push(
//       `${getNotVisitedShipmentsSubquery()} = ${query.notVisitedShipments}`,
//     );
//   }

//   if (query.pendingShipments) {
//     filterCriteria.push(
//       `${getPendingShipmentsSubquery()} = ${query.pendingShipments}`,
//     );
//   }

//   if (filterCriteria.length > 0) {
//     return `HAVING ${filterCriteria.join(' AND ')}`;
//   }

//   return '';
// }

// function getShipmentsSortCriteria(sort: string) {
//   if (sort === 'coverNumber') {
//     return `"cover"."${sort}"`;
//   } else if (sort === 'distributionDate') {
//     return `"cover"."createdAt"`;
//   } else if (sort === 'carrier') {
//     return `"carrierId"`;
//   } else if (
//     [
//       'totalShipments',
//       'informedShipments',
//       'notInformedShipments',
//       'notVisitedShipments',
//       'pendingShipments',
//     ].includes(sort)
//   ) {
//     return `"${sort}"`;
//   } else {
//     return `"cover"."id"`;
//   }
// }

// function getShipmentsOrderCriteria(order: string) {
//   if (['ASC', 'DESC'].includes(order)) {
//     return `${order}`;
//   } else {
//     return 'DESC';
//   }
// }

// export function getStreetShipmentsCountQuery(
//   query: GetStreetShipmentsFilterDto,
// ) {
//   return `
//     SELECT
//       COUNT(*) "totalResults"
//     FROM
//       (SELECT
//         "cover"."id",
//         ${getTotalShipmentsSubquery()},
//         ${getInformedShipmentsSubquery()},
//         ${getNotInformedShipmentsSubquery()},
//         ${getNotVisitedShipmentsSubquery()},
//         ${getPendingShipmentsSubquery()}
//        FROM PUBLIC."cover"
//         LEFT JOIN "node" "coverNode" ON "cover"."nodeId" = "coverNode"."id"
//         LEFT JOIN "carrier_entry" ON "carrier_entry"."cover" = "cover"."id"
//         LEFT JOIN "cover_content_entry" "coverContent" ON "coverContent"."coverId" = "cover"."id"
//         LEFT JOIN "cover_content_entry_container" "coverContentEntryContainer" ON "coverContentEntryContainer"."coverContentEntryId" = "coverContent"."id"
//       WHERE "coverNode"."id" = $1 AND "carrier_entry"."entryType" = $2 ${getShipmentsFilterCriteriaInWhereClause(
//         query,
//       )}
//       GROUP BY "cover"."id", "carrier_entry"."id"
//       ${getShipmentsFilterCriteriaInHavingClause(query)}
//       ORDER BY ${
//         query.sort ? getShipmentsSortCriteria(query.sort) : `"cover"."id"`
//       } ${
//     query.order ? getShipmentsOrderCriteria(query.order) : 'DESC'
//   }) "resultCount"
//   `;
// }

// // PRODUCT SHIPPER QUERIES

// export function getProductsByShipperAndProductIds(
//   shipperId: number,
//   productIds: number[],
// ) {
//   return `
//     SELECT "product_shipper"."id" "productShipperId", "product"."id" "productId"
//     FROM "product_shipper" LEFT JOIN "product_shipper_products_product" ON "product_shipper_products_product"."productShipperId" = "product_shipper"."id"
//     LEFT JOIN "product" ON "product"."id" = "product_shipper_products_product"."productId"
//     WHERE "product_shipper"."shipperId" = ${shipperId} AND "product"."id" IN (${productIds});
//   `;
// }

// // SHIPPER RECOVERY ADDRESS QUERIES

// export function getShipperRecoveryAddressListResultsQuery(
//   query: GetShipperRecoveryAddressFilterDto,
// ) {
//   return `
//     SELECT
//       "shipper_recovery_address"."id" AS "id",
//       "shipper_recovery_address"."branchName" AS "branchName",
//       "shipper_recovery_address"."address" AS "address",
//       "shipper_recovery_address"."province" AS "province",
//       "shipper_recovery_address"."city" AS "city",
//       "shipper_recovery_address"."zipCode" AS "zipCode",
//       "shipper_recovery_address"."phone" AS "phone",
//       "shipper_recovery_address"."isActive" AS "isActive",
//       "shipper"."id" AS "shipper_id",
//       "shipper"."name" AS "shipper_name"
//     FROM "shipper_recovery_address"
//     LEFT JOIN "shipper" ON "shipper"."id" = "shipper_recovery_address"."shipperId"
//     WHERE "shipper"."id" = ${query.shipperId}${
//     query.isActive !== undefined
//       ? ` AND "shipper_recovery_address"."isActive" = ${query.isActive}`
//       : ''
//   } AND 
//     ${
//       !query.searchField
//         ? `(LOWER("shipper_recovery_address"."branchName") ILIKE '%${query.searchValue}%'
//         OR LOWER("shipper_recovery_address"."address") ILIKE '%${query.searchValue}%'
//         OR LOWER("shipper_recovery_address"."province") ILIKE '%${query.searchValue}%'
//         OR LOWER("shipper_recovery_address"."city") ILIKE '%${query.searchValue}%'
//         OR LOWER("shipper_recovery_address"."zipCode") ILIKE '%${query.searchValue}%'
//         OR LOWER("shipper_recovery_address"."phone") ILIKE '%${query.searchValue}%')`
//         : `LOWER("shipper_recovery_address"."${query.searchField}") ILIKE '%${query.searchValue}%'`
//     }
//     ORDER BY ${
//       query.sort
//         ? `"shipper_recovery_address"."${query.sort}"`
//         : `"shipper_recovery_address"."branchName"`
//     } ${query.order ? query.order : 'asc'}
//     LIMIT ${query.limit} ${
//     query.page > 1 ? `OFFSET ${query.limit * (query.page - 1)}` : ''
//   }
//   `;
// }

// export function getShipperRecoveryAddressListCountQuery(
//   query: GetShipperRecoveryAddressFilterDto,
// ) {
//   return `
//     SELECT
//       COUNT(*) "totalResults"
//     FROM
//       (SELECT
//         "shipper_recovery_address"."id" AS "id",
//         "shipper_recovery_address"."branchName" AS "branchName",
//         "shipper"."id" AS "shipper_id",
//         "shipper"."name" AS "shipper_name"
//       FROM "shipper_recovery_address"
//       LEFT JOIN "shipper" ON "shipper"."id" = "shipper_recovery_address"."shipperId"
//       WHERE "shipper"."id" = ${query.shipperId}${
//     query.isActive !== undefined
//       ? ` AND "shipper_recovery_address"."isActive" = ${query.isActive}`
//       : ''
//   } AND 
//         ${
//           !query.searchField
//             ? `(LOWER("shipper_recovery_address"."branchName") ILIKE '%${query.searchValue}%'
//             OR LOWER("shipper_recovery_address"."address") ILIKE '%${query.searchValue}%'
//             OR LOWER("shipper_recovery_address"."province") ILIKE '%${query.searchValue}%'
//             OR LOWER("shipper_recovery_address"."city") ILIKE '%${query.searchValue}%'
//             OR LOWER("shipper_recovery_address"."zipCode") ILIKE '%${query.searchValue}%'
//             OR LOWER("shipper_recovery_address"."phone") ILIKE '%${query.searchValue}%')`
//             : `LOWER("shipper_recovery_address"."${query.searchField}") ILIKE '%${query.searchValue}%'`
//         }
//         ORDER BY ${
//           query.sort
//             ? `"shipper_recovery_address"."${query.sort}"`
//             : `"shipper_recovery_address"."branchName"`
//         } ${query.order ? query.order : 'asc'}
//     ) "resultCount"
//   `;
// }

// // RESCUE QUERIES

// export function getRescueListResultsQuery(query: GetRescuesFilterDto) {
//   return `
//     SELECT
//       "rescue"."id" "rescueId",
//       "rescue"."status",
//       "rescue"."optionDelivery",
//       "rescue"."province" "rescueProvince",
//       "rescue"."city" "rescueCity",
//       "rescue"."zipCode" "rescueZipCode",
//       "rescue"."address" "rescueAddress",
//       "rescue"."branchName",
//       "rescue"."createdAt",
//       "order"."id" "orderId",
//       "order"."trackingId",
//       "order"."address",
//       "order"."zipCode",
//       "order"."province",
//       "order"."state",
//       "order"."generatedShipment",
//       "product"."id" "productId",
//       "product"."name" "productName",
//       "shipper"."id" "shipperId",
//       "shipper"."name" "shipperName",
//       "shipper"."idShipper",
//       "receiver"."id" "receiverId",
//       "receiver"."fullName",
//       "receiver"."email",
//       "receiver"."dni",
//       "stage"."name" "stageName",
//       "service"."id" "serviceId",
//       "service"."name" "serviceName",
//       "piece"."id" "pieceId",
//       "currentNode"."id" "pieceCurrentNodeId",
//       "currentNode"."name" "pieceCurrentNodeName",
//       "stagesHistory"."id" "stagesHistoryId",
//       "moment"."id" "momentId",
//       "moment"."display_name" "displayName",
//       "receiverNode"."id" "receiverNodeId",
//       "receiverNode"."name" "receiverNodeName"
//     FROM "rescue" "rescue"
//     LEFT JOIN "order" ON "order"."id" = "rescue"."orderId"
//     LEFT JOIN "shipper" ON "shipper"."id" = "order"."shipper"
//     LEFT JOIN "stage" ON "stage"."id" = "order"."stageId"
//     LEFT JOIN "services" "service" ON "service"."id" = "order"."service"
//     LEFT JOIN "receiver" ON "receiver"."orderId" = "order"."id"
//     LEFT JOIN "piece" ON "piece"."orderId" = "order"."id"
//     LEFT JOIN "product" ON "product"."id" = "order"."product"
//     LEFT JOIN "node" "currentNode" ON "currentNode"."id" = "piece"."currentNodeId"
//     LEFT JOIN "stages_history" "stagesHistory" ON "stagesHistory"."id" = "piece"."currentStageHistoryId"
//     LEFT JOIN "moments" "moment" ON "moment"."id" = "stagesHistory"."momentId"
//     LEFT JOIN "node" "receiverNode" ON "receiverNode"."id" = "rescue"."chanelledNodeId"
//     WHERE "rescue"."isActive" = true AND "shipper"."isActive" = true ${getRescueListFilterCriteriaInWhereClause(
//       query,
//     )}
//     ORDER BY ${
//       !!query.sort
//         ? getRescueListSortCriteria(query.sort)
//         : `"rescue"."id" DESC`
//     };
//   `;
// }

// export function getRescueListCountQuery(query: GetRescuesFilterDto) {
//   return `
//     SELECT
//       COUNT(DISTINCT("rescueId")) "totalResults"
//     FROM
//       (
//         SELECT
//           "rescue"."id" "rescueId",
//           "rescue"."status",
//           "rescue"."optionDelivery",
//           "rescue"."province" "rescueProvince",
//           "rescue"."city" "rescueCity",
//           "rescue"."zipCode" "rescueZipCode",
//           "rescue"."address" "rescueAddress",
//           "rescue"."branchName",
//           "rescue"."createdAt",
//           "order"."id" "orderId",
//           "order"."trackingId",
//           "order"."address",
//           "order"."zipCode",
//           "order"."province",
//           "order"."state",
//           "order"."generatedShipment",
//           "product"."id" "productId",
//           "product"."name" "productName",
//           "shipper"."id" "shipperId",
//           "shipper"."name" "shipperName",
//           "shipper"."idShipper",
//           "receiver"."id" "receiverId",
//           "receiver"."fullName",
//           "receiver"."email",
//           "receiver"."dni",
//           "stage"."name" "stageName",
//           "service"."id" "serviceId",
//           "service"."name" "serviceName",
//           "piece"."id" "pieceId",
//           "currentNode"."id" "pieceCurrentNodeId",
//           "currentNode"."name" "pieceCurrentNodeName",
//           "stagesHistory"."id" "stagesHistoryId",
//           "moment"."id" "momentId",
//           "moment"."display_name" "displayName"
//         FROM "rescue" "rescue"
//         LEFT JOIN "order" ON "order"."id" = "rescue"."orderId"
//         LEFT JOIN "shipper" ON "shipper"."id" = "order"."shipper"
//         LEFT JOIN "stage" ON "stage"."id" = "order"."stageId"
//         LEFT JOIN "services" "service" ON "service"."id" = "order"."service"
//         LEFT JOIN "receiver" ON "receiver"."orderId" = "order"."id"
//         LEFT JOIN "piece" ON "piece"."orderId" = "order"."id"
//         LEFT JOIN "product" ON "product"."id" = "order"."product"
//         LEFT JOIN "node" "currentNode" ON "currentNode"."id" = "piece"."currentNodeId"
//         LEFT JOIN "stages_history" "stagesHistory" ON "stagesHistory"."id" = "piece"."currentStageHistoryId"
//         LEFT JOIN "moments" "moment" ON "moment"."id" = "stagesHistory"."momentId"
//         WHERE "rescue"."isActive" = true AND "shipper"."isActive" = true ${getRescueListFilterCriteriaInWhereClause(
//           query,
//         )}
//         ORDER BY ${
//           !!query.sort
//             ? getRescueListSortCriteria(query.sort)
//             : `"rescue"."id" DESC`
//         }
//       ) "resultCount"
//   `;
// }

// export function getRescuePendingCoverIdsQuery(orderIds: string[] | number[]) {
//   return `
//     SELECT
//       "cover"."id" "coverId",
//       "order"."id" "orderId"
//     FROM
//       "cover"
//     LEFT JOIN
//       "cover_content_entry" ON "cover_content_entry"."coverId" = "cover"."id"
//     LEFT JOIN
//       "piece" ON "piece"."id" = "cover_content_entry"."entityId"
//     LEFT JOIN
//       "order" ON "order"."id" = "piece"."orderId"
//     WHERE
//       "order"."id" IN (${orderIds.toString()})
//   `;
// }

// function getRescueListFilterCriteriaInWhereClause(query: GetRescuesFilterDto) {
//   const filterCriteria = [];

//   if (query.createdAtFrom && query.createdAtTo) {
//     filterCriteria.push(
//       `"rescue"."createdAt" BETWEEN '${query.createdAtFrom}' AND '${query.createdAtTo}'`,
//     );
//   }

//   if (query.rescueStatus) {
//     const rescueStatuses = query.rescueStatus
//       .split(',')
//       .map((s) => `'${s}'`)
//       .join(',');
//     filterCriteria.push(`"rescue"."status"::text IN (${rescueStatuses})`);
//   }

//   // Filtro para nodo actual (busca por id y por igualdad)
//   if (query.currentNodeId) {
//     filterCriteria.push(`"currentNode"."id" = ${query.currentNodeId}`);
//   }

//   // Filtro para nodo actual (busca por name y por regex contains)
//   if (query.currentNode) {
//     filterCriteria.push(`"currentNode"."name" ILIKE '%${query.currentNode}%'`);
//   }

//   if (query.trackingId) {
//     filterCriteria.push(`"order"."trackingId" ILIKE '%${query.trackingId}%'`);
//   }

//   if (query.address) {
//     filterCriteria.push(`"order"."address" ILIKE '%${query.address}%'`);
//   }

//   if (query.province) {
//     filterCriteria.push(`"order"."province" ILIKE '%${query.province}%'`);
//   }

//   if (query.state) {
//     filterCriteria.push(`"order"."state" ILIKE '%${query.state}%'`);
//   }

//   if (query.zipCode) {
//     filterCriteria.push(`"order"."zipCode" ILIKE '%${query.zipCode}%'`);
//   }

//   if (query.generatedShipment) {
//     filterCriteria.push(
//       `"order"."generatedShipment" = ${query.generatedShipment}`,
//     );
//   }

//   if (query.shipper) {
//     filterCriteria.push(
//       `("shipper"."name" ILIKE '%${query.shipper.replace(
//         / /g,
//         '',
//       )}%' OR CAST ("shipper"."idShipper" AS TEXT) ILIKE '%${query.shipper.replace(
//         / /g,
//         '',
//       )}%')`,
//     );
//   }

//   if (query.productName) {
//     filterCriteria.push(`"product"."name" ILIKE '%${query.productName}%'`);
//   }

//   if (query.serviceName) {
//     filterCriteria.push(`"service"."name" ILIKE '%${query.serviceName}%'`);
//   }

//   if (query.stage) {
//     filterCriteria.push(`"stage"."name" ILIKE '%${query.stage}%'`);
//   }

//   if (query.receiverFullName) {
//     filterCriteria.push(
//       `"receiver"."fullName" ILIKE '%${query.receiverFullName}%'`,
//     );
//   }

//   if (query.receiverDni) {
//     filterCriteria.push(`"receiver"."dni" ILIKE '%${query.receiverDni}%'`);
//   }

//   if (query.momentDisplayName) {
//     filterCriteria.push(
//       `"moment"."display_name" ILIKE '%${query.momentDisplayName}%'`,
//     );
//   }

//   if (filterCriteria.length > 0) {
//     return `AND ${filterCriteria.join(' AND ')}`;
//   }

//   return '';
// }

// function getRescueListSortCriteria(sortCriteria: string) {
//   const [sort, order] = sortCriteria.split(',');

//   switch (sort) {
//     case 'stage.name':
//       return `"stage"."name" ${order} NULLS LAST`;
//     case 'moment.displayName':
//       return `"moment"."display_name" ${order}`;
//     case 'service.name':
//       return `"service"."name" ${order}`;
//     case 'shipper.name':
//       return `"shipper"."name" ${order}`;
//     case 'product.name':
//       return `"product"."name" ${order}`;
//     case 'receiver.dni':
//       return `"receiver"."dni" ${order}`;
//     case 'receiver.fullName':
//       return `"receiver"."fullName" ${order}`;
//     case 'currentNode.name':
//       return `"currentNode"."name" ${order} NULLS LAST`;
//     case 'rescueStatus':
//       return `"rescue"."status"::text ${order}`;
//     default:
//       return `"order"."${sort}" ${order}`;
//   }
// }

// export function getCDISTDistributionDetailsQuery() {
//   return `
//     SELECT
//       "distributor_details"."distributorId",
//       "distributor_details"."distributionDate"
//     FROM PUBLIC."distributor_details"
//     WHERE "Container" = $1
//   `;
// }

// export function getDistributorNameQuery() {
//   return `
//     SELECT
//       "carrierName" "distributorName"
//     FROM PUBLIC."carrier_entry"
//     WHERE "carrierId" = $1
//     LIMIT 1
//   `;
// }

/*
Example of getUserAuthV2:

  Permissions({actionAlias: ["CREATE"], resourceAlias: "orders"})

*/
