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

type JName struct {

	Id string `json:"_id,omitempty"`

	Name string `json:"name,omitempty"`

	Slugs []interface{} `json:"slugs,omitempty"`

	ConstructorName string `json:"constructorName,omitempty"`

	UsedAsPath string `json:"usedAsPath,omitempty"`
}
