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

type JCredential struct {

	Id string `json:"_id,omitempty"`

	Provider string `json:"provider"`

	Title string `json:"title"`

	Identifier string `json:"identifier"`

	OriginId string `json:"originId"`

	Meta interface{} `json:"meta,omitempty"`

	Fields []string `json:"fields,omitempty"`

	Verified bool `json:"verified,omitempty"`

	AccessLevel string `json:"accessLevel,omitempty"`
}
