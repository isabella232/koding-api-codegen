/* 
 * Koding API
 *
 * Koding API for integrating your application with Koding services
 *
 * OpenAPI spec version: 0.0.3
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

package swagger

type JComputeStack struct {

	Id string `json:"_id,omitempty"`

	Title string `json:"title"`

	OriginId string `json:"originId"`

	Group string `json:"group"`

	BaseStackId string `json:"baseStackId,omitempty"`

	StackRevision string `json:"stackRevision,omitempty"`

	Machines interface{} `json:"machines,omitempty"`

	Config interface{} `json:"config,omitempty"`

	Meta interface{} `json:"meta,omitempty"`

	Credentials interface{} `json:"credentials,omitempty"`

	Status JMachineStatus `json:"status,omitempty"`
}